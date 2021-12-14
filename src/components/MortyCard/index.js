import React, {useEffect, useState} from 'react'

import CharacterInfo from '../CharacterInfo';
import "./MortyCard.css"

function MortyCard() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            console.table(response);
            const data = await response.json();
            console.log(data);
            setCharacters(data);
        }

        getCharacters()
    }, [])

    const MortyUI = characters.map(({id, name, species, status}) => (
        <CharacterInfo key={id} name={name} species={species} status={status}/>
    ));

    return (
        <div>
            {MortyUI.map((item) =>(
                <CharacterInfo key={item.id} name={item.name} species={item.species} status={item.status}></CharacterInfo>
            ))}
        </div>
	);
}

export default MortyCard;