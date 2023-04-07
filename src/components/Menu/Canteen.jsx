import React from "react";
import CanteenCard from "./CanteenCard";
import axios from "../../api/axios";

function Canteen(){


    const [canteens, setCanteens] = React.useState([]);

    React.useEffect(() => {
        axios.get("/canteen")
        .then((res)=>{
            setCanteens(res.data);
        })
      },[]);

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