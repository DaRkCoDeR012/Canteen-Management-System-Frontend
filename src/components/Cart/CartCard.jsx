import React from "react";
import "./cart.css";

function CartCard(props) {

  function handleRemove(event){
    props.remove(event,props.index);
  }

  return (
    <div className="card cartcard" >
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.type} {props.category}</li>
        <li className="list-group-item">Quantity: {props.quantity}</li>
        <li className="list-group-item">Total: ₹ {props.total}</li>
      </ul>
      <div className="card-body">
      <a onClick={handleRemove} id={props.id} className="btn btn-primary">Remove <i className="fa fa-trash" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

export default CartCard;
