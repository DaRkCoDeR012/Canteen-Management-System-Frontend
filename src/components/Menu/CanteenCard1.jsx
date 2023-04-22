import React from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";

function CanteenCard1(props) {
  const navigate = useNavigate();
  const name=props.name;
  const [isActive, setIsActive] = React.useState({});
  function gotomenu(event) {
    navigate("/userhome", {
      state: {
        name: props.name,
        cid: props.canteen_id,
      },
    });
    window.location.reload();
  }

  return (
    <a 
      className={isActive === {name} ? "nav-link active" : "btn nav-link"}
      id={props.name}

      onClick={gotomenu}
    >
      <div className="card ads">
        <div className="row  g-0">
            <div className="card-body1">
              <h3 className="card-title1">{name}</h3>
            </div>
          
        </div>
      </div>
    </a>
  );
}

export default CanteenCard1;
