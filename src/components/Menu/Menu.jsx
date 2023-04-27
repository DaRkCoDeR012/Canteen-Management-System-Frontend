import React from "react";
import MenuCard from "./MenuCard";
import useAuth from "../../hooks/useAuth";

function Menu(props){

    // const [foods, setFoods] = React.useState([]);
    const name = props.name;
    const {auth} = useAuth()
    const canteens = auth?.canteen
    const canteen = canteens.filter(canteen => {
        return canteen.canteen_name === name;
    })
    console.log(canteen)
    const foods = canteen[0].fooditems

    return(<div>
        {foods.map((food,index)=>{
            return(<MenuCard
                key={index} 
                name={food.name}
                price={food.price}
                type={food.type}
                category={food.category}
                canteen_name={name}
                image = {food.image}
            />)
            })}</div>
    );   
}

export default Menu;