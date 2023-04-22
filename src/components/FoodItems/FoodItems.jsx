import React from "react";
import axios from "../../api/axios";
import "./fooditem.css";
import useAuth from "../../hooks/useAuth";

function FoodItem() {
  const [foods, setFoods] = React.useState([]);
  const { auth } = useAuth();
  const canteen_name = auth?.canteen?.canteen_name;
  const cid = auth?.canteen?._id;
  function removeitem(event) {
    setFoods((prevFood) => {
      const id = event.target.name;
      return prevFood.filter((foodItem, index) => {
        return index !== id;
      });
    });
    axios
      .delete("/food/" + cid + "/" + event.target.id)
      .then(window.location.reload());
  }

  React.useEffect(() => {
    axios.get("/food/" + canteen_name).then((res) => {
      setFoods(res.data);
    });
  }, []);

  return (
    <table className="table table-light fooditem">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Item Name</th>
          <th scope="col">Price</th>
          <th scope="col">Type</th>
          <th scope="col">Category</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td scope="row">{food.name}</td>
              <td scope="row">{food.price}</td>
              <td scope="row">{food.type}</td>
              <td scope="row">{food.category}</td>
              <td scope="row">
                <button
                  className="btn btn-light"
                  name={index}
                  id={food._id}
                  onClick={removeitem}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FoodItem;
