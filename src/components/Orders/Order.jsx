import React from "react";
import axios from "../../api/axios";
import OrderCardAdmin from "./OrderCardAdmin";
import useAuth from "../../hooks/useAuth";

function Order(){
    const {auth} = useAuth();
    const cid = auth?.canteen?._id;
    const [orders,setOrders] = React.useState([]);

    React.useEffect(()=>{
        axios.get("/allorder/"+cid)
        .then((res)=>{setOrders(res.data)}
        );
    },[]);

    return(<div className="Menu">
        {orders.slice(0).reverse().map((order,index)=>{
            return(<OrderCardAdmin
            username={order.username}
            key={index}
            id = {order._id}
            user={false}
            index={index+1}
            cart={order.cart}
            time = {order.ordertime}
            total = {order.total}
            canteen_name = {order.canteen_name}
            status = {order.status}
        />)
        })}
        
    </div>);
}

export default Order;