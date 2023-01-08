import React, { useEffect } from "react";
import PropTypes from "prop-types";
import './RestaurentCard.css';
import { useState } from "react";



const RestaurentCard = (props) => {
    return(
    // <div className="restaurent-card">
    //     <img className="restaurent-logo">
    //         src={props.restaurent.img}
    //         alt="restaurent-pic"
    //     </img>
    //     <div className="restaurent-desc wrap-text">
    //         {props.restaurent.cusines}
    //     </div>
    //     <div className="restaurent-location">
    //         <div className="distance">{props.restaurent.distance}</div>
    //     </div>
    //     <div className="restaurent-review">
    //         {`${props.restaurent.reviews} reviews`}
    //     </div>

    // </div>
<>
<div>
  <header>
    <img className="img" src="logoWhite.png" alt />
    <p className="user_header">Hello,Siva</p>
  </header>
  <div className="main-container">
    <div className="box">
      <div className="subbox1" />
      <div className="subbox2">
        <p className="p1">Adyar Anandha Bhavan</p>
        <p className="p2">vegetarina,chinese,thandoori </p>
        <p className="p3">⌖ kms</p>
      </div>
    </div>
    <div className="box">
      <div className="subbox1" />
      <div className="subbox2">
        <p className="p1">Adyar Anandha Bhavan</p>
        <p className="p2">vegetarina,chinese,thandoori </p>
        <p className="p3">⌖ kms</p>
      </div>
    </div>
    <div className="box">
      <div className="subbox1" />
      <div className="subbox2">
        <p className="p1">Adyar Anandha Bhavan</p>
        <p className="p2">vegetarina,chinese,thandoori </p>
        <p className="p3">⌖ kms</p>
      </div>
    </div>
    <div className="box">
      <div className="subbox1" />
      <div className="subbox2">
        <p className="p1">Adyar Anandha Bhavan</p>
        <p className="p2">vegetarina,chinese,thandoori </p>
        <p className="p3">⌖ kms</p>
      </div>
    </div>
    <div className="box">
      <div className="subbox1" />
      <div className="subbox2">
        <p className="p1">Adyar Anandha Bhavan</p>
        <p className="p2">vegetarina,chinese,thandoori </p>
        <p className="p3">⌖ kms</p>
      </div>
    </div>
    <div className="box">
      <div className="subbox1" />
      <div className="subbox2">
        <p className="p1">Adyar Anandha Bhavan</p>
        <p className="p2">vegetarina,chinese,thandoori </p>
        <p className="p3">⌖ kms</p>
      </div>
    </div>
  </div>
</div>

</>
    
    );
}

export default RestaurentCard;