import React, { useState } from "react";

// Components
import NavBarItem from "../NavBarItem";

// Styles
import "./NavBar.css";

const ULItems = [
	{
		id: 1,
		text: "Item 1",
	},
	{
		id: 2,
		text: "Item 2",
	},
	{
		id: 3,
		text: "Item 3",
	},
	{
		id: 4,
		text: "Item 4",
	},
];

function NavBar() {
	const [active, setActive] = useState(1);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");

	let content = "";
	switch (active) {
		case 1:
			content = "Holi 1";
			break;
		case 2:
			content = "Holi 2";
			break;
		case 3:
			content = "Holi 3";
			break;
		default:
			content = "No holi";
			break;
	}

	return (
		<div>
			<ul>
				{ULItems.map((item) => (
					<NavBarItem
						key={item.id}
						text={item.text}
						className={checkActive(item.id)}
						callback={() => handleClick(item.id)}
					/>
				))}
			</ul>
			<div>
				<h1>{content}</h1>
			</div>
		</div>
	);
}

export default NavBar;

/*
(el item activo es el 1)
1. El usuario da click en el item 3
2. El click se propaga al componente NavBarItem
3. Dentro de NavBarItem, se ejecuta el callback
4. El callback ejecuta a handleClick (que es el que actualiza al estado)
5. Se ejecuta el setter setActive y se genera un nueva renderización
6. Al momento de renderizar, como el estado active, cambio de valor, el methodo
		checkActive cambia las clases dada la iteración del map
7. Se renderiza
*/







// import React, {useEffect, useState} from 'react'

// //Styles
// import "./NavBar.css";

// const ULItems = [
//     {
//         id:1,
//         text: "Content 1",
//     },
//     {
//         id:2,
//         text: "Content 2",
//     },
//     {
//         id:3,
//         text: "Content 3",
//     },
// ]
// export default function NavBar() {
//     const [active, setActive] = useState(0)
//     let content = ""
//     const handleClick = (element) => {setActive(element)}

//     switch(active) {
//         case 1: content = `Random content ${active}`
//         break;
//         case 2: content = `Random content ${active}`
//         break;
//         case 3: content = `Random content ${active}`
//         break;
//         default: content = `No content`
//     }

//     const checkActive = (element) => active === element ? 'li-active': null;
//     const checkActiveContent = (element) => (active === element ? true:false);
//     return (
//         <div>
//             <ul>
//                 {ULItems.map(() => (
//                     <li key={item.id} className={checkActive(item.id)} onClick= {() => handleClick(item.id)}>{item.text}</li>
//                 ))}
                
//                 <div>{checkActiveContent(active) ? <h1>{content}</h1> : null}</div>
//             </ul>
//         </div>
//     )
// }




/* <li className={checkActive(1)} onClick= {() => handleClick(1)}>Item 1</li>
                <li className={checkActive(2)} onClick= {() => handleClick(2)}>Item 2</li>
                <li className={checkActive(3)} onClick= {() => handleClick(3)}>Item 3</li> */