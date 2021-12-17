import React from 'react'

import "./Input.css";

export default function Input({id, label, value, setValue, type = "text"}) {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={(event) => setValue(event.target.value)} value={value}/>
        </div>
    )
}