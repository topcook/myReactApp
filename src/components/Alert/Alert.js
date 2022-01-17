import React from "react";
import PropTypes from 'prop-types';
// import './Alert.css';

export default function Alert({children, title, type}) {

    const colors = {
        success: '#6da06f',
        error: '#f56260'
    }

    const styles = {
        heading: {
            color: colors[type],
            margin: '0 0 10px 0'
        },

        wrapper: {
            border: `${colors[type]} solid 1px`,
            marginBottom: 15,
            padding: 15,
            position: 'relative'
        }
    }

    return (
        <div style = {styles.wrapper}>
            <h2 style = {styles.heading}>{title}</h2>
            {children}
        </div>
    );
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired
}