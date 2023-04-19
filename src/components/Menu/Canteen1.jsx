import React from 'react'
import axios from '../../api/axios';
import CanteenCard1 from './CanteenCard1';

const Canteen1 = () => {
    const [canteens, setCanteens] = React.useState([]);

    React.useEffect(() => {
        axios.get("/canteen")
        .then((res)=>{
            setCanteens(res.data);
        })
      },[]);

    return(<div>
        {canteens.map((canteen,index)=>{
            return(<CanteenCard1
                key={index} 
                name={canteen.canteen_name}
                owner={canteen.name}
                canteen_id={canteen._id}
            />)
            })}</div>
    );   
}

export default Canteen1
