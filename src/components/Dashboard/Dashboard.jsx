import React from "react";
import axios from "../../api/axios"
import useAuth from "../../hooks/useAuth";
import "./dashboard.css";
import { useLocation } from "react-router-dom";

const date = new Date().getDate();
const fulldate = new Date().toLocaleDateString();

function Dashboard() {
  const {auth} = useAuth();
  const location = useLocation();
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [orders, setOrder] = React.useState([]);
  const [revenue, setRevenue] = React.useState(0);

  setInterval(updateTime, 1000);
  function updateTime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  const cid = auth?.canteen?._id;
  // console.log(cid);

  React.useEffect(() => {
    axios.get("/allorder/"+cid).then((res) => {
      setOrder(res.data);
    });
    // console.log(orders);
    axios
      .get("/gettotal/"+cid)
      .then((res) => setRevenue(res.data));
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="col-4 dashcard1">
          <div className="card mb-3" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-2">
                <i className="fa-solid fa-calendar-days fa-4x" />
              </div>
              <div className="col-md-10">
                <div className="card-body cardbody">
                  <h5 className="card-title">{fulldate}</h5>
                  <h5 className="card-title">{time}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 dashcard2">
          <div className="card mb-3" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-2">
                <i className="fa-regular fa-wallet fa-4x" />
              </div>
              <div className="col-md-10">
                <div className="card-body cardbody">
                  <h5 className="card-title">₹ {revenue}</h5>
                  <h5 className="card-title">Total Revenue</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
            <h1 className="tablehead">Orders</h1>
        <hr />
        <table className="table table-light ordertable">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Order ID</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order,index)=>{
                return(<tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{order._id}</td>
                        <td>{order.total}</td>
                      </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
