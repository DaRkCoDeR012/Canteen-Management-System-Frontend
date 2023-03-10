import React from "react";
import axios from "axios";
import OrderCard from "./OrderCard";

function MyOrders(props){

    const [orders,setOrders] = React.useState([]);
    const user = props.id;

    React.useEffect(()=>{
        axios.get("http://localhost:8080/order/"+user)
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
        />)
        })}
        
    </div>);
}

export default MyOrders;