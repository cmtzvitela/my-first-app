import React from "react";

function CharacterInfo({name, species, status}) {
    return(
        <div>
            <h1>{name}</h1>
            <h3>{species}-{status}</h3>
        </div>
    )
}

export default CharacterInfo;