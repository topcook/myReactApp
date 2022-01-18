import React from "react";
import { createUseStyles } from 'react-jss';
import SaladBuilder from "../SaladBuilder/SaladBuilder";

const useStyles = createUseStyles({
    wrapper: {
        textAlign: 'center'
    }
});

export default function SaladMaker() {
    const classes = useStyles();

    return (
        <h1 className={classes.wrapper}>
            <span role = "img" aria-label="salad">🥗</span>
            Build Your Custom Salad!
            <sapn role = "img" aria-label = "salad">🥗</sapn>
            <SaladBuilder />
        </h1>
    );
}