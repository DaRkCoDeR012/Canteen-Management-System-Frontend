import React from "react";
import CanteenCard from "./CanteenCard";
import axios from "axios";

function Canteen(){


    const [canteens, setCanteens] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8080/canteen")
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
                // type={canteen.type}
                // category={canteen.category}
            />)
            })}</div>
    );   
}

export default Canteen;