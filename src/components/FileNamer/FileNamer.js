import React, { useState } from "react";
import './FileNamer.css'

export default function FileNamer() {

    const [name, setName] = useState('anonymous');

    return (
        <div className="wrapper">
            <div className="preview">
                <h2>Preview: { name}.js</h2>
            </div>
            <form>
                <label>
                    <p>Name: </p>
                    <input autoComplete="off" name="name" onChange={event => setName(event.target.value)} />
                </label>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}