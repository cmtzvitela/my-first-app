import React from 'react'

function Greeting(props) {
    return (
        <div>
            <h1>Hola {props.name}</h1>
        </div>
    );
}

export default Greeting;