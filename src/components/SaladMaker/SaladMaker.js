import React, { useReducer, createContext } from "react";
import { createUseStyles } from 'react-jss';
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";

const useStyles = createUseStyles({
    wrapper: {
        textAlign: 'center'
    }
});

export const SaladContext = createContext();

const reducer = (state, item) => ([...state, item]);

export default function SaladMaker() {
    const classes = useStyles();

    const [salad, setSalad] = useReducer(reducer, []);

    return (
        <SaladContext.Provider value={{ salad, setSalad }}>
            <h1 className={classes.wrapper}>
                <span role="img" aria-label="salad">🥗</span>
                Build Your Custom Salad!
                <sapn role="img" aria-label="salad">🥗</sapn>
                <SaladBuilder />
                <SaladSummary />
            </h1>
        </SaladContext.Provider>
    );
}