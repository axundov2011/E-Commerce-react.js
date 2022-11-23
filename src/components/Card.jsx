import React from "react";

const Card = (props) => {

  return (
    <div className="card">
      <div className="favorite">
        <img width={14} height={14} src="/img/unlike.png" alt="" />
      </div>
      <img width={113} height={112} src="/img/forma-bayern1.jpg" alt="img" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center ">
        <div className="d-flex flex-column">
          <span>Qiymet</span>
          <b>{props.price}</b>
        </div>
        <button className="button">
        {props.imgUrl}
        </button>
      </div>
    </div>
  );
};

export default Card;
