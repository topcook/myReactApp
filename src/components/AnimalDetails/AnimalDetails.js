import React from 'react'
import PropTypes from 'prop-types';
import './AnimalDetails.css';
import AnimalCard from '../AnimalCard/AnimalCard';

function convertFood(food) {
    switch(food) {
        case 'insects':
        return '🐜';
        case 'meat':
        return '🍖';
        case 'plants':
        default:
        return '🌱';
        }
}

export default function AnimalDetails({diet}) {
    return (
        <div className='details'>
            <h4>Details</h4>
            Diet: {diet.map(food => convertFood(food)).join(', ')}
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired
}