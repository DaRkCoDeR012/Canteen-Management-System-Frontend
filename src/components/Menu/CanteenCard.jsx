import React from "react";
import "./menu.css"
import { useNavigate } from "react-router-dom";

function CanteenCard(props) {
    const navigate = useNavigate();
    const [isActive, setIsActive] = React.useState("Menu");
  

  function gotomenu(event){
    navigate("/userhome",
    {state:{name: props.name}}
    );
  }

  return (
    <div className="card mb-3 menucard" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 imgdiv">
          <img src="https://cdn-icons-png.flaticon.com/128/737/737967.png" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 cardbod">
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <hr />
            <h4 className="card-text">
                Owner:  {props.owner}
            </h4>
            {/* <h4 className="card-text">
                Type: {props.type} {props.category}
            </h4> */}
            {/* <div className="added"><i onClick={minus} className="fa-solid fa-minus"></i><span>{count}</span><i onClick={add} className="fa-solid fa-plus"></i></div> */}
            <a className={
                      isActive === "Menu" ? "nav-link" : "nav-link"
                    } 
                    id="Menu" onClick={gotomenu}>Go To Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanteenCard;
