import React from "react";
import axios from "axios";
import "./fooditem.css";
import { useLocation } from "react-router-dom";

function FoodItem() {
  const [foods, setFoods] = React.useState([]);
  const location = useLocation();
  const canteen_name= location.state.name[2];
  const cid= location.state.name[3];
  function removeitem(event) {
    setFoods((prevFood) => {
      const id = event.target.name;
      return prevFood.filter((foodItem, index) => {
        return index !== id;
      });
    });
    axios
      .delete("http://localhost:8080/food/"+cid+ "/" + event.target.id)
      .then(window.location.reload());
  }

  React.useEffect(() => {
    axios.get("http://localhost:8080/food/"+canteen_name).then((res) => {
      setFoods(res.data);
    });
  }, []);

  return (
    <table className="table table-light fooditem">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Item Name</th>
          <th scope="col">Price</th>
          <th scope="col">Type</th>
          <th scope="col">Category</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food,index)=>{
            return(<tr key={index}>
                <th scope="row">{index+1}</th>
                <td scope="row">{food.name}</td>
                <td scope="row">{food.price}</td>
                <td scope="row">{food.type}</td>
                <td scope="row">{food.category}</td>
                <td scope="row"><button className="btn btn-dark" name={index} id={food._id} onClick={removeitem}>-</button></td>
                </tr>)
              })}
      </tbody>
    </table>
  );

  // return(<div className="Menu">
  //     <table className="fooditemtable">
  //         <thead>
  //             <tr>
  //                 <th>Item Name</th>
  //                 <th>Price</th>
  //                 <th>Item Type</th>
  //                 <th>Item Category</th>
  //                 <th>Remove</th>
  //             </tr>
  //         </thead>
  //         <tbody>
            //   {foods.map((food,index)=>{
            //       return(<tr key={index}>
            //           <td>{food.name}</td>
            //           <td>{food.price}</td>
            //           <td>{food.type}</td>
            //           <td>{food.category}</td>
            //           <td><button name={index} id={food._id} onClick={removeitem}>-</button></td>
            //       </tr>)
            //   })}
  //         </tbody>
  //     </table>
  // </div>);
}

export default FoodItem;
