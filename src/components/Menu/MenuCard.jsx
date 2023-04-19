import React from "react";
import axios from "../../api/axios";
import "./menu.css"
import useAuth from "../../hooks/useAuth";

function MenuCard(props) {
  const {auth} = useAuth();
    const [added, setAdded] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const userid = auth?.foundUser?._id;
  const cart = {
    name: props.name,
    type: props.type,
    category: props.category,
    price: props.price,
    canteen_name:props.canteen_name,
    user_id:userid
  }
  
  function add(){
    setCount(count+1);
    setAdded(true);
  }

  function minus(){
    if(count > 0){
        setCount(count-1);
    }
    else{
        setAdded(false);
    }
  }

  function addToCart(event){
    setCount(0);
    if(added){
    cart.quantity = count;
    axios.post("/cart",cart).then();}
  }

  return (
    <div className="card mb-3 menucard3" >
      <div className="row1 g-0">
        <div className="col-12 imgdiv">
          <img src="https://cdn-icons-png.flaticon.com/128/737/737967.png" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="name">
          <hr />
          <h3 className="card-title">{props.name}</h3>
        </div>
        <div className="d-flex cardbod">
          <div className="card-body col-6">
            <h5 className="card-text">
                {props.type} {props.category}
            </h5>
            <h5 className="card-text">
                Price: ₹ {props.price}
            </h5>
          </div>
          <div className="col-6">
            <div className="added"><i onClick={minus} className="fa-solid fa-minus"></i><span>{count}</span><i onClick={add} className="fa-solid fa-plus"></i></div>
            <button className="btn btn-success" onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
