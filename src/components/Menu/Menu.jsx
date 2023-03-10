import React from "react";
import MenuCard from "./MenuCard";
import axios from "axios";

function Menu(){


    const [foods, setFoods] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8080/food")
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
            />)
            })}</div>
    );   
}

export default Menu;