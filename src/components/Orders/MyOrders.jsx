import React from "react";
import axios from "../../api/axios";
import OrderCard from "./OrderCard";

function MyOrders(props){

    const [orders,setOrders] = React.useState([]);
    const user = props.id;
    // const canteen_name=""


    React.useEffect(()=>{
        axios.get("/order/"+user)
        .then((res)=>{setOrders(res.data)});
    },[]);

    return (<div className="Menu">
        {orders.map((order,index) => {
           return( <OrderCard
            key={index}
            user={true}
            index={index+1}
            cart={order.cart}
            time = {order.ordertime}
            total = {order.total}
            canteen_name = {order.canteen_name}
        />)
        })}
        
    </div>);
}

export default MyOrders;