import React, { useEffect, useState } from 'react';
import { getRiverInformation } from '../services/rivers';
import PropTypes from 'prop-types';

export default function RiverInformation({ name }) {

    const [riverinformation, setRiverInformation] = useState({});

    useEffect(() => {
        let mounted = true;
        getRiverInformation(name).
            then((riverData) => {
                if (mounted) {
                    setRiverInformation(riverData);
                }
            });
        return () => {
            //it is executed when unmounting.
            mounted = false;
        }
    }, [name])

    return (
        <div>
            <h2>River Information</h2>
            <ul>
                <li>Continet: {riverinformation.continent}</li>
                <li>Length: {riverinformation.length}</li>
                <li>Outflow: {riverinformation.outflow}</li>
            </ul>
        </div>
    )
}

RiverInformation.propTypes = {
    name: PropTypes.string.isRequired
}