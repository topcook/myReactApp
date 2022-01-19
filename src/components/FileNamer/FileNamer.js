import React from "react";
import './FileNamer.css'

export default function FileNamer() {
    return (
        <div className="wrapper">
            <div className="preview">
                <h2>Preview:</h2>
            </div>
            <form>
                <label>
                    <p>Name: </p>
                    <input name="name" />
                </label>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}