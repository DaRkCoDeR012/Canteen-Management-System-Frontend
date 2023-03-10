import React from "react";
import axios from "axios";
import "./fooditem.css"

function FoodItem() {
  const [foods, setFoods] = React.useState([]);

  function removeitem(event) {
    setFoods((prevFood) => {
      const id = event.target.name;
      return prevFood.filter((foodItem, index) => {
        return index !== id;
      });
    });
    axios
      .delete("http://localhost:8080/food/" + event.target.id)
      .then(window.location.reload());
  }

  React.useEffect(() => {
    axios.get("http://localhost:8080/food").then((res) => {
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
