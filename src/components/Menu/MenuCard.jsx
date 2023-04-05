import React from "react";
import axios from "axios";
import "./menu.css"
import { useLocation } from "react-router-dom";

function MenuCard(props) {
  const location = useLocation;
    const [added, setAdded] = React.useState(false);
    const [count, setCount] = React.useState(0);
    // console.log(props.canteen_name);
  // const canteen_name=location.state.canteen_name;
  const cart = {
    name: props.name,
    type: props.type,
    category: props.category,
    price: props.price,
    canteen_name:props.canteen_name,
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
    axios.post("http://localhost:8080/cart",cart).then();}
  }

  return (
    <div className="card mb-3 menucard" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 imgdiv">
          <img src="https://cdn-icons-png.flaticon.com/128/737/737967.png" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 cardbod">
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <hr />
            <h4 className="card-text">
                Price: ₹ {props.price}
            </h4>
            <h4 className="card-text">
                Type: {props.type} {props.category}
            </h4>
            <div className="added"><i onClick={minus} className="fa-solid fa-minus"></i><span>{count}</span><i onClick={add} className="fa-solid fa-plus"></i></div>
            <button onClick={addToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
