import React from "react";
import "./CustomButton.css";
import PropTypes from "prop-types";

const CustomButton = (props) => {
  return(
    <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
    >
        {props.value}
    </button>
  );  
};

CustomButton.propTypes = {
        type: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        value: PropTypes.string
}

export default CustomButton;