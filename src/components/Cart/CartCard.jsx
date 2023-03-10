import React from "react";
import "./cart.css";

function CartCard(props) {

  function handleRemove(event){
    props.remove(event,props.index);
  }

  return (
    <div className="card cartcard" style={{ width: "18rem" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/737/737967.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.type} {props.category}</li>
        <li className="list-group-item">Quantity: {props.quantity}</li>
        <li className="list-group-item">Total: ₹ {props.total}</li>
      </ul>
      <div class="card-body">
      <a onClick={handleRemove} id={props.id} class="btn btn-primary">Remove</a>
      </div>
    </div>
  );
}

export default CartCard;
