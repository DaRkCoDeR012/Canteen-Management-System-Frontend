import React from "react";
import axios from "../../api/axios";
import CartCard from "./CartCard";

function Cart(props) {
  const [cart, setCart] = React.useState([]);
  let canteen_name = "";
  const cid = props.cid;
  const canteen = props.canteen;
  let orderTotal = 0;
  React.useEffect(() => {
    axios.get("/cart").then((res) => {
      setCart(res.data);
    });
  }, []);

  function remove(event, id) {
    setCart((prevCart) => {
      return prevCart.filter((cartItem, index) => {
        return index !== id;
      });
    });
    axios
      .delete("/cart/" + event.target.id)
      .then((res) => console.log(res.data));
  }

  function order(event) {
    if (orderTotal > 0) {
      axios
        .post(
          "/order/" +
            event.target.id +
            "/" +
            event.target.name +
            "/" +
            orderTotal +
            "/" +
            canteen_name +
            "/" +
            cid,
          cart
        )
        .then((res) => console.log(res));
      setCart([]);
      axios.delete("/cart");
    } else {
      alert("Can't Place Empty Order");
    }
  }

  return (
    <div className="row">
      <div className="scroll">
        {
        cart.map((item, index) => {
          canteen_name = item.canteen_name;
          if (canteen===canteen_name) {
            const total = item.price * item.quantity;
            orderTotal = orderTotal + total;
            return (
              <CartCard
                key={index}
                index={index}
                id={item._id}
                name={item.name}
                price={item.price}
                type={item.type}
                category={item.category}
                quantity={item.quantity}
                total={total}
                canteen_name={item.canteen_name}
                remove={remove}
              />
            );
          }
        })}
      </div>
      {/* <hr />     */}
      <div className="d-grid col-12 foot">
        <hr />
        <h2 className="order-total">Total: ₹ {orderTotal}</h2>
        <button
          name={props.username}
          id={props.id}
          onClick={order}
          type="button"
          className="btn btn-success order-btn"
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
