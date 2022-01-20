import React from "react";
import PropTypes from 'prop-types';

export default function CharacterMap({text}){
    return(
        <div>
            CharacterMap:
                {text}
        </div>
    );
}

CharacterMap.propTypes= {
    text:PropTypes.string.isRequired
}