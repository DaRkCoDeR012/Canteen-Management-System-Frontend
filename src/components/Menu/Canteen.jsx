import React from "react";
import CanteenCard from "./CanteenCard";
import useAuth from '../../hooks/useAuth';

function Canteen(){

    const { auth } = useAuth();

    const canteens = auth?.canteen

    return(<div>
        {canteens.map((canteen,index)=>{
            return(<CanteenCard
                key={index} 
                name={canteen.canteen_name}
                owner={canteen.name}
                canteen_id={canteen._id}
            />)
            })}</div>
    );   
}

export default Canteen;