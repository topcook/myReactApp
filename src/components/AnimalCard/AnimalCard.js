import React from "react";
import './AnimalCard.css';
import PropTypes from 'prop-types';

export default function AnimalCard(props) {
    return(
        <div className="animal-wrapper">
            <h3>{props.name}</h3>
            <div>{props.size}kg</div>
            <div>{props.diet.join(', ')}</div>
        </div>
    )
}

AnimalCard.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}