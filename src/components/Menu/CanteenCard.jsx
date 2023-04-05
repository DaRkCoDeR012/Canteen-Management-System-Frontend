import React from "react";
import UserHome from '../UserHome/UserHome';
import axios from "axios";
import "./menu.css"
import { useLocation,useNavigate } from "react-router-dom";

function CanteenCard(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const userid = location.state.name[1];
    const username = location.state.name[0];
    const [isActive, setIsActive] = React.useState("Menu");
    const [option, setOption] = React.useState(<UserHome />);

    const [added, setAdded] = React.useState(false);
    const [count, setCount] = React.useState(0);
  
  const cart = {
    canteen_name: props.name,
    Owner: props.owner,
    // category: props.category,
    // price: props.price,
  }
  
  function add(){
    setCount(count+1);
    setAdded(true);
  }

  function minus(){
    if(count > 0){
        setCount(count-1);
    }
    else{
        setAdded(false);
    }
  }

  function gotomenu(event){
    navigate("/userhome",{
        state:{
            name:location.state.name,
            canteen_name: props.name
        }
    });}
    function handleClick(event) {
        setIsActive(event.target.id);
        if (event.target.id === "Menu") {
          setOption(<UserHome name={props.name}/>);}
        // } else if (event.target.id === "MyOrders") {
        //   setOption(<MyOrders id={userid} />);
        // } else if (event.target.id === "Cart") {
        //   setOption(<Cart id={userid} username={username}/>);
        }
      
    // setCount(0);
    // if(added){
    // cart.quantity = count;
    // axios.post("http://localhost:8080/cart",cart).then();}

  return (
    <div className="card mb-3 menucard" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 imgdiv">
          <img src="https://cdn-icons-png.flaticon.com/128/737/737967.png" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 cardbod">
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <hr />
            <h4 className="card-text">
                Owner:  {props.owner}
            </h4>
            {/* <h4 className="card-text">
                Type: {props.type} {props.category}
            </h4> */}
            {/* <div className="added"><i onClick={minus} className="fa-solid fa-minus"></i><span>{count}</span><i onClick={add} className="fa-solid fa-plus"></i></div> */}
            <a className={
                      isActive === "Menu" ? "nav-link" : "nav-link"
                    } 
                    id="Menu" onClick={gotomenu}>Go To Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanteenCard;
