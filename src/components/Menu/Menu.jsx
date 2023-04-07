import React from "react";
import MenuCard from "./MenuCard";
import axios from "../../api/axios";

function Menu(props){

    const [foods, setFoods] = React.useState([]);
    const name = props.name;
    React.useEffect(() => {
        axios.get("/food/"+name)
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