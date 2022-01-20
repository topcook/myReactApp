import React, {memo} from "react";
import PropTypes from 'prop-types';

function itemize(text) {
    const letters = text.split('')
        .filter(l => l !== ' ')
        .reduce((collection, item) => {
            const letter = item.toLowerCase();
            return {
                ...collection,
                [letter]: (collection[letter] || 0) + 1
            }
        }, {})
    return Object.entries(letters)
        .sort((a, b) => b[1] - a[1]);
}

function CharacterMap({ text }) {
    return (
        <div>
            CharacterMap:
            <ul>
                {
                    itemize(text).map(character => (<li key={character[0]}>{character[0]}:{character[1]}</li>))
                }
            </ul>
        </div>
    );
}

CharacterMap.propTypes = {
    text: PropTypes.string.isRequired
}

export default memo(CharacterMap);