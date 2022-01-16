import React from "react";
import './AnimalCard.css';
import PropTypes from 'prop-types';

export default function AnimalCard(props) {
    return(
        <div className="animal-wrapper">
            <h2>{props.name}</h2>
            <h3>{props.scientificName}</h3>
            <h4>{props.size}kg</h4>
            <div>{props.diet.join(', ')}</div>
            <button onClick = {() => props.showAdditional(props.additional)}>More Info</button>
        </div>
    )
}

AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes:PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired
}

AnimalCard.defaultProps = {
    additional:{
        notes: 'No Additional Information'
    }
}