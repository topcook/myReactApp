import { tab } from '@testing-library/user-event/dist/tab';
import React, { useReducer } from 'react';
import CharacterCount from '../CharacterCount/CharacterCount';

const reducer = (state, action) => {
    return {
        ...state,
        [action]: !state[action]
    }
}
export default function TextInformation() {
    const [tabs, toggleTabs] = useReducer(reducer, {
        characterCount: true,
        wordCount: true,
        characterMap: true
    });

    return (
        <div>
            <button onClick={() => toggleTabs('characterCount')}>Character Count</button>
            <button onClick={() => toggleTabs('wordCount')}>Word Count</button>
            <button onClick={() => toggleTabs('characterMap')}>Character Map</button>
            <CharacterCount show = {tabs.characterCount} />
        </div>
    )
}