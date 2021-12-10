import React, {useEffect, useState} from 'react'

//Styles
import "./NavBar.css";

export default function NavBar() {
    const [active, setActive] = useState(0)
    let content = ""
    const handleClick = (element) => {setActive(element)}

    switch(active) {
        case 1: content = `Random content ${active}`
        break;
        case 2: content = `Random content ${active}`
        break;
        case 3: content = `Random content ${active}`
        break;
        case 4: content = `Random content ${active}`
        break;
        default: content = `No content`
    }

    const checkActive = (element) => active === element ? 'li-active': null;
    const checkActiveContent = (element) => (active === element ? true:false);
    return (
        <div>
            <ul>
                <li className={checkActive(1)} onClick= {() => handleClick(1)}>Item 1</li>
                <li className={checkActive(2)} onClick= {() => handleClick(2)}>Item 2</li>
                <li className={checkActive(3)} onClick= {() => handleClick(3)}>Item 3</li>
                <li className={checkActive(4)} onClick= {() => handleClick(4)}>Item 4</li>
                <div>{checkActiveContent(active) ? <h1>{content}</h1> : null}</div>
            </ul>
        </div>
    )
}
