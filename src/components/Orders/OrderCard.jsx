import React from "react";
import "./orders.css";
import { useLocation } from "react-router-dom";


function OrderCard(props) {
  const location = useLocation();
  const c_name = location.state.canteen_name;
  // console.log(c_name);
  let canteenflag = false;
  (props.canteen_name===c_name) 
    
      ? canteenflag = true : canteenflag = false;
  
  //   let adminflag = false;
  //   localStorage.getItem("admintoken") ? adminflag = true : adminflag = false
  if (!canteenflag) {
    
  
  return (
    <></>
    // <div
    //   className={"card border-success mb-3 ordercard"}
    //   style={{ maxWidth: "18rem" }}
    // >
      
    //   <div className="card-header">
    //     <h3>{props.index}. {!props.user && props.username}</h3>
    //   </div>
    //   <div className={"card-body text-success"}>
    //     <h5>Food Items</h5>
    //     <hr />
    //     {props.cart.map((item, index) => {
    //       return (
    //         <h5 key={index} className="card-title">
    //           {item.quantity} - {item.name}
    //         </h5>
    //       );
    //     })}
    //     <hr />
    //     <h5 className="card-title"> Price: ₹ {props.total}</h5>
    //     <hr />
    //     <h5 className="card-title">Order Time: {props.time}</h5>
        
    //   {/* <hr /><h5 className="card-title">Canteen Name: {props.canteen_name}</h5> */}
        
    //   </div>
    // </div>
  );}
  else if (canteenflag){
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
  }else{
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
}

export default OrderCard;
