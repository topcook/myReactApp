import React, { useEffect, useState } from 'react';
import { getRiverInformation } from '../services/rivers';
import PropTypes from 'prop-types';

export default function RiverInformation({ name }) {

    const [riverinformation, setRiverInformation] = useState({});

    useEffect(() => {
        // console.log("before true");
        let mounted = true;
        getRiverInformation(name).
            then((riverData) => {
                if (mounted) {
                    setRiverInformation(riverData);
                    // console.log("mounted: true: ", mounted);
                }
            });
        // console.log("after true");
        return () => {
            mounted = false;
            // console.log("mounted: false: ", mounted);
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