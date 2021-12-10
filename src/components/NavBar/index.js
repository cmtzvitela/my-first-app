import React, {useEffect, useState} from 'react'

//Styles
import "./NavBar.css";

export default function NavBar() {
    const [active, setActive] = useState(0)

    const handleClick = (element) => {setActive(element)}

    const checkActive = (element) => active === element ? 'li-active': null;
    return (
        <div>
            <ul>
                <li className={checkActive(1)} onClick= {() => handleClick(1)}>Item 1</li>
                <li className={checkActive(2)} onClick= {() => handleClick(2)}>Item 2</li>
                <li className={checkActive(3)} onClick= {() => handleClick(3)}>Item 3</li>
                <li className={checkActive(4)} onClick= {() => handleClick(4)}>Item 4</li>
            </ul>
        </div>
    )
}
