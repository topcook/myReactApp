import React from "react";
import Proptypes from 'prop-types';
import './Card.css';

export default function Card({children, details, title}) {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
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
  details: Proptypes.element,
  title: Proptypes.string.isRequired
}

Card.defaultProps = {
  details: null
}