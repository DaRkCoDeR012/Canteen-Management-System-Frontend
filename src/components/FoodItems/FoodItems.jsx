import React from "react";
import axios from "../../api/axios";
import "./fooditem.css";
import useAuth from "../../hooks/useAuth";

function FoodItem() {
  const { auth } = useAuth();
  const [foods,setFoods] = React.useState(auth?.canteen?.fooditems)
  const canteen_name = auth?.canteen?.canteen_name;
  const cid = auth?.canteen?._id;
  function removeitem(event) {
    console.log(event.target)
    axios
      .delete("/food/" + cid + "/" + event.target.id).then((res)=>{
        auth.canteen = res.data
        setFoods(auth.canteen.fooditems)
      })
  }

  // React.useEffect(() => {
  //   axios.get("/food/" + canteen_name).then((res) => {
  //     setFoods(res.data);
  //   });
  // }, []);

  return (
    <table className="table table-light fooditem" style={{marginTop:"30px"}}>
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
        {foods.map((food, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td scope="row">{food.name}</td>
              <td scope="row">{food.price}</td>
              <td scope="row">{food.type}</td>
              <td scope="row">{food.category}</td>
              <td scope="row">
                <button
                  className="btn btn-light fa fa-trash"
                  name={index}
                  id={food._id}
                  onClick={removeitem}
                >
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FoodItem;
