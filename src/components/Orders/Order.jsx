import React from "react";
import axios from "axios";
import OrderCardAdmin from "./OrderCardAdmin";
import { useLocation } from "react-router-dom";

function Order(){
    const location = useLocation();
    const cid = location.state.name[3];
    // console.log(name)
    const [orders,setOrders] = React.useState([]);

    React.useEffect(()=>{
        axios.get("http://localhost:8080/allorder/"+cid)
        .then((res)=>{setOrders(res.data)}
        );
        // console.log(orders)
    },[]);

    return(<div className="Menu">
        {orders.map((order,index)=>{
            return(<OrderCardAdmin
            username={order.username}
            key={index}
            user={false}
            index={index+1}
            cart={order.cart}
            time = {order.ordertime}
            total = {order.total}
            canteen_name = {order.canteen_name}
        />)
        })}
        
    </div>);
}

export default Order;