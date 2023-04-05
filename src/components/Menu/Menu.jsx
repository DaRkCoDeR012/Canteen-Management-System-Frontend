import React from "react";
import MenuCard from "./MenuCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Menu(){

    const location=useLocation();
    const [foods, setFoods] = React.useState([]);
    const name=location.state.canteen_name;
    // console.log(name);
    React.useEffect(() => {
        axios.get("http://localhost:8080/food/"+name)
        .then((res)=>{
            setFoods(res.data);
        })
      },[]);

    return(<div>
        {foods.map((food,index)=>{
            return(<MenuCard
                key={index} 
                name={food.name}
                price={food.price}
                type={food.type}
                category={food.category}
                canteen_name={name}
            />)
            })}</div>
    );   
}

export default Menu;