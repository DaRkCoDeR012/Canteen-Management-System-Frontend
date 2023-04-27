import React from "react";
import axios from "../../api/axios";
import "./addfood.css";
import useAuth from "../../hooks/useAuth";
import img from "../../public/Uploadicon.png";
import {useNavigate} from 'react-router-dom'

function ADDFOOD() {
  const { auth } = useAuth();
  const Navigate = useNavigate();
  const [src, setSrc] = React.useState(img);
  const [isUploaded, setIsUploaded] = React.useState(false);
  const [image, setImage] = React.useState("");
  const cid = auth?.canteen?._id;
  const [food, setFood] = React.useState({
    name: "",
    type: "Veg",
    category: "Starter",
    price: "",
    image: "",
  });
  const [formErrors, setFormErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(true);

  const handleClick = async (event) => {
    event.preventDefault();
    setFormErrors(validate(food));
    if (isUploaded) {
      const formdata = new FormData();
      formdata.append("testimg", image);
      const res = await axios.post(`/uploadimage/${cid}`, formdata);
      food.image = res.data.imagepath;
      if (Object.keys(formErrors).length === 0 && isValid) {
        setIsValid(false);
        axios.post("/food/" + cid, food, {
          withCredentials: true,
        }).then((res)=>{
          auth.canteen = res.data
          window.location.reload()
        });
      }
    } else {
      if (Object.keys(formErrors).length === 0 && isValid) {
        setIsValid(false);
        axios.post("/food/" + cid, food, {
          withCredentials: true,
        }).then((res)=>{
          auth.canteen = res.data
          window.location.reload()
        });
      }
    }
  };

  const handleImg = async (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    setIsUploaded(true);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFood((prevFood) => {
      return { ...prevFood, [name]: value };
    });
  }

  function validate(food) {
    const errors = {};
    if (food.name === "") {
      errors.name = "Food Name is required!";
      setIsValid(false);
    }
    if (!food.price || food.price <= 0) {
      errors.price = "Enter valid price!";
      setIsValid(false);
    }
    if (food.type === "") {
      errors.type = "Select Type";
      setIsValid(false);
    }
    if (food.category === "") {
      errors.type = "Select Category";
      setIsValid(false);
    }
    return errors;
  }

  return (
    <div className="row justify-content-start addfood">
      <div
        className="col-6 imgdiv1 justify-content-center"
        onChange={handleImg}
      >
        <label htmlFor="file-upload">
          <img src={src} className="img-fluid rounded-end" alt="..." style={{width:"200px", height:"140px"}} />
          {!isUploaded && (
            <h5 style={{ textAlign: "center", marginTop: "4px" }}>
              Click Above to Add Image
            </h5>
          )}
        </label>
        <input
          name="name"
          type="file"
          id="file-upload"
          className="imagefood"
          placeholder="Food Image"
        />
      </div>
      <div className="col-6">
        <h1 className="h3 mb-3 fw-normal">Add Food</h1>
        <div className="form-floating">
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Food Name"
            value={food.name}
          />
          <p>{formErrors.name}</p>
          <label htmlFor="floatingInput">Food Name</label>
        </div>
        <div className="form-floating">
          <input
            name="price"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Price"
            value={food.price}
          />
          <p>{formErrors.price}</p>
          <label htmlFor="floatingInput">Price</label>
        </div>
        <select
          name="type"
          onChange={handleChange}
          className="form-select"
          value={food.type}
        >
          <option value="Veg">Veg</option>
          <option value="Non Veg">Non-Veg</option>
          <option value="Hot">Hot</option>
          <option value="Cold">Cold</option>
        </select>
        <p>{formErrors.type}</p>
        <select
          name="category"
          onChange={handleChange}
          className="form-select"
          value={food.category}
        >
          <option value="Starter">Starter</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Main-Course">Main-Course</option>
          <option value="Breads">Breads</option>
          <option value="Beverage">Beverage</option>
          <option value="Dessert">Dessert</option>
        </select>
        <p>{formErrors.category}</p>
        <div className="form-floating"></div>
        <button
          type="submit"
          className="w-100 btn btn-lg btn-primary"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ADDFOOD;
