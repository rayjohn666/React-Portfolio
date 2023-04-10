import React, { useState } from 'react';
import "./Card.css";

const Card =(props) => {
 return (
    <div id="row">
 <p>{props.name}</p>
 <p>{props.description}</p>
 <a href={props.link}>Link to Tech Blog</a>
 </div>
 );
};








export default Card