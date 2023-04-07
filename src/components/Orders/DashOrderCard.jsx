import React from "react";
import "./orders.css";


function DashOrderCard(props) {
    
    return (
      <div
        className={"card border-success mb-3 ordercard"}
        style={{ maxWidth: "18rem" }}
      >
        
        <div className="card-header">
          <h3>{props.index}. {!props.user && props.username}</h3>
        </div>
        <div className={"card-body text-success"}>
          <h5>Food Items</h5>
          <hr />
          {props.cart.map((item, index) => {
            return (
              <h5 key={index} className="card-title">
                {item.quantity} - {item.name}
              </h5>
            );
          })}
          <hr />
          <h5 className="card-title"> Price: ₹ {props.total}</h5>
          <hr />
          <h5 className="card-title">Order Time: {props.time}</h5>
          
        <hr /><h5 className="card-title">Canteen Name: {props.canteen_name}</h5>
          
        </div>
      </div>
    );
}

export default DashOrderCard;
