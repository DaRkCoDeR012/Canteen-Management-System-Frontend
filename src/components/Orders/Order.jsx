import React from "react";
import axios from "../../api/axios";
import OrderCardAdmin from "./OrderCardAdmin";
import useAuth from "../../hooks/useAuth";

function Order(){
    const {auth} = useAuth();
    const cid = auth?.canteen?._id;
    // console.log(name)
    const [orders,setOrders] = React.useState([]);

    React.useEffect(()=>{
        axios.get("/allorder/"+cid)
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