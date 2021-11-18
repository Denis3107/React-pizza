import React from 'react';
import {NavLink} from "react-router-dom";

const Button = (props) => {
    return (
       <div className={props.className} onClick={props.onClick}>{props.children}</div>
    );
};

export default Button;