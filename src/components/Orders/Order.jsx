import React from "react";
import axios from "axios";
import OrderCard from "./OrderCard";

function Order(){

    const [orders,setOrders] = React.useState([]);

    React.useEffect(()=>{
        axios.get("http://localhost:8080/order")
        .then((res)=>{setOrders(res.data)});
    },[]);

    return(<div className="Menu">
        {orders.map((order,index)=>{
            return(<OrderCard
            username={order.username}
            key={index}
            user={false}
            index={index+1}
            cart={order.cart}
            time = {order.ordertime}
            total = {order.total}
        />)
        })}
        
    </div>);
}

export default Order;