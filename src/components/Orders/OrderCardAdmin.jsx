import React, {useState, useEffect} from "react";
import "./orders.css";
import axios from "../../api/axios";

function OrderCardAdmin(props) {

  const [st,setSt] = useState('')
  const [status, setStatus] = useState(props.status)

  useEffect(() => {if(props.status === "Prepairing"){
    setSt('warning')
  }
  else if(props.status === 'Ready'){
    setSt('success')
  }
  else{
    setSt('danger')
  }},[])

  const setReady = async() => {
    const obj = {status: "Ready"};
    const s = await axios.put(`/orderstatus/${props.id}`, obj)
    setSt('success')
    setStatus('Ready')
  }

  const setDelivered = async() => {
    const obj = {status: "Delivered"};
    const s = await axios.put(`/orderstatus/${props.id}`, obj)
    setSt('danger')
    setStatus('Delivered')
  }

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
        <h5 className="card-title">Status: {status} </h5>
      </div>
      {st !== "danger" && <div class="d-grid gap-2 d-sm-flex justify-content-sm-center" style={{marginBottom: "1rem"}}>
        <button type="button" class="btn btn-dark gap-3" onClick={setReady}>Ready</button>
        <button type="button" class="btn btn-dark" onClick={setDelivered}>Delivered</button>
      </div>}
    </div>
  );
}

export default OrderCardAdmin;
