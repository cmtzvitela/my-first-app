import React, {useEffect, useState} from 'react'

const capitalizeWord = (word) => {
    if(!word) {
        return "";
    } 
    let _word = word.toLowerCase().split("");
    _word[0] = _word[0].toUpperCase();
    _word = _word.join("");

    return _word
    //return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function FullName ({firstName, lastName = ""}) {
    console.log("Paso 1: Montaje")
    const [fakeName, setfakeName] = useState("David Moranchel")
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        console.log("Paso 3: Commit")
        setIsLoading(false)
    }, []);

    useEffect(() => {
        console.log("Paso 4: Commit de actualizacion")
    });


    const _firstName = capitalizeWord(firstName)
    const _lastName = capitalizeWord(lastName)
    console.log("Paso2: Renderizado")
    return (
        <div>
            <h1>
                Nombre completo es {_firstName} {_lastName}
            </h1>
        </div>
    );
}

export default FullName;






// const _firstName = firstName.toLowerCase().split("");
// _firstName[0] = _firstName[0].toUpperCase();
// _firstName = _firstName.join("");

// const _lastName = lastName.toLowerCase().split("");
// if (lastName) {
//     _lastName[0] = _lastName[0].toUpperCase();
//     _lastName = _lastName.join("");
// }

