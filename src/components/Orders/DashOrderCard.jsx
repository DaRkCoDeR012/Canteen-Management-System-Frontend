import React, {useEffect, useState} from "react";
import "./orders.css";


function DashOrderCard(props) {

  const [st,setSt] = useState('')

  useEffect(() => {if(props.status === "Prepairing"){
    setSt('warning')
  }
  else if(props.status === 'Ready'){
    setSt('success')
  }
  else{
    setSt('danger')
  }},[])
    
    return (
      <div
        className={`card border-${st} mb-3 ordercard`}
        style={{ maxWidth: "18rem" }}
      >
        
        <div className="card-header">
          <h3>{props.index}. {!props.user && props.username}</h3>
        </div>
        <div className={`card-body text-${st}`}>
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
          <hr />
          <h5 className="card-title">Status: {props.status}</h5>
          
        <hr /><h5 className="card-title">Canteen Name: {props.canteen_name}</h5>
          
        </div>
      </div>
    );
}

export default DashOrderCard;
