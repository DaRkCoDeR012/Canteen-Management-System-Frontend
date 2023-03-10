import React from "react";
import axios from "axios";
import CartCard from "./CartCard";

function Cart(props){
    const [cart,setCart] = React.useState([]);
    let orderTotal = 0;

    React.useEffect( () => {
        axios.get("http://localhost:8080/cart").then((res)=>{
        setCart(res.data);
    })},[]);

    function remove(event,id) {
        setCart((prevCart) => {
            return prevCart.filter((cartItem,index) => {
                return index !== id;
            });
        });
        axios.delete("http://localhost:8080/cart/" + event.target.id).then(res=>console.log(res.data));
    }

    function order(event){
        if(orderTotal > 0){
        axios.post("http://localhost:8080/order/"+event.target.id+"/"+event.target.name+"/"+orderTotal,cart)
        .then(res=>console.log(res));
        setCart([]);
        axios.delete("http://localhost:8080/cart");
        }
        else{
            alert("Can't Place Empty Order");
        }
    }

    return(<div>{cart.map((item,index) => {
        const total = item.price*item.quantity;
            orderTotal = orderTotal+total;
            return(<CartCard
                key={index}
                index={index}
                id={item._id}
                name={item.name}
                price={item.price}
                type={item.type}
                category={item.category}
                quantity={item.quantity}
                total={total}
                remove={remove}
            />);
    })}
        <div className="d-grid gap-2">
            <h2 className="order-total">Total: ₹ {orderTotal}</h2>
            <button name={props.username} id={props.id} onClick={order} type="button" className="btn btn-success order-btn">Order</button>
        </div>
    </div>);
}

export default Cart;