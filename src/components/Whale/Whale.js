import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {

    const match = useMatch("/whale/*");

    // console.log("useMatch: ", match.pathnameBase);//returns '/whale
    // console.log(`${match.pathnameBase}/beluga`);//returns '/whale
    // console.log("match.params.path: ", match.params.path); // returns 'blue' or 'beluga'
    console.log("match.params.path: ", match); // returns 'blue' or 'beluga'


    return (
        <>
            <h2>Whale</h2>
            <Routes>
                <Route path='/whale/beluga' element={<Beluga />} />
                <Route path={`${match.pathnameBase}/blue`} element={<Blue />} />
            </Routes>
        </>
    );
}