import React from "react";
import Proptypes from 'prop-types';
import './Card.css';

export default function Card({children, title}) {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
      </div>
      {children}  
    </div>
  )
}

Card.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.element),
    Proptypes.element.isRequired
  ]),
  title: Proptypes.string.isRequired
}