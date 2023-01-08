import React from "react";
import './HeaderBar.css';
import { Link } from "react-router-dom";

const HeaderBar = () => {
    return(
        <div className="header">
            <div className="header-content child">
                <Link to="/">
                <img className="header-logo" src={"logoWhite.png"} alt="logo " />
                </Link>
            </div>
            <div className="user-name">
                <p>Hello, Racx</p>
            </div>
           
        </div>
        
    );
};

export default HeaderBar;