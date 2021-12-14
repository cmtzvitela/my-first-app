import React, { useState } from "react";

// Styles
import "./Counter.css";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	let colorCounter = counter % 2 === 0 ? "text-even" : "text-odd";

	return (
		<div>
			<p className={colorCounter}>Counter: {counter}</p>
			<div className="container">
				<button className="btn" onClick={() => setCounter(counter + 1)}>
					Add
				</button>
				<button className="btn" onClick={() => setCounter(counter - 1)}>
					Substract
				</button>
			</div>
		</div>
	);
}





// import React, {useEffect, useState} from 'react';

// //Styles
// import "./Counter.css";

// export default function Counter(){
//     const [counter, setCounter] = useState(0);
//     const [otherCounter, setOtherCounter] =useState(0);

//     useEffect(() => {
//         console.log('Me ejecuto cuando cambia Counter')
//         if(counter % 3 === 0 && counter >0) {
//             setOtherCounter(otherCounter + 1);
//         }
//     }, [counter])
    
//     return (
//         <div>
//             <p className = {counter % 2 === 0? "text-even":"text-odd"}>Counter: {counter}</p>
//             <p>Counter 2: {otherCounter}</p>
//             <button className = "btn" onClick={() => setCounter(counter +1)}>+1</button>
//             <button className = "btn" onClick={() => setCounter(counter -1)}>-1</button>
//         </div>
//     )
// }







// useEffect(() => {
//     console.log('Me ejecuto siempre')
// })

// useEffect(() => {
//     console.log('Me ejecuto solo la primera vez')
// }, [])



// useEffect(() => {
//     console.log('Me ejecuto cuando cambia Other Counter')
// }, [otherCounter])
