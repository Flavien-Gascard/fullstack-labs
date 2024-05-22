import React, { useState } from "react";

export default function ReactState(props) {
    let [name, setName] = useState("Enter Name");
    function updateName() {
        let newName = prompt("What is your name?");
        setName(newName);
    }

    return (
        <div>
            <h1>
                {name}
            </h1>
            <button onClick={updateName}>
                Update name
            </button>
        </div>
    );
}