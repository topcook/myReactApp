import React, { useEffect, useState } from 'react';
import { getRiverInformation } from '../services/rivers';

export default function RiverInformation() {

    const [riverinformation, setRiverInformation] = useState({});

    useEffect(() => {
        getRiverInformation().then((riverData) => setRiverInformation(riverData));
    }, [])

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