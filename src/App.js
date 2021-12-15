import "./App.css";
import { useEffect, useState } from "react";

// Components
import Character from "./components/Character";

// Services
import { listCharacters } from "./services/characters";

function App() {
	const [characters, setCharacters] = useState([]);
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const list = async () => {
			const { results, info } = await listCharacters();
			setCharacters(results);
			setData(info);
			setIsLoading(false)
		};
		list();
	}, []);

	const handleClick = async (action) => {
		setIsLoading(true)
		if (action === "next" && data.next != null) {
			const page = data.next.split("?")[1];
			const { results, info } = await listCharacters(page);
			setCharacters(results);
			setData(info);
		} else if(action === "prev" && data.prev != null) {
			const page = data.prev.split("?")[1];
			const { results, info } = await listCharacters(page);
			setCharacters(results);
			setData(info);
		} else if (data.next === null){
			<button id="next" className="no-next"></button>
		} else if(data.prev === null) {
			<button id="prev" className="no-prev"></button>
		}
		setIsLoading(false)
	};

	const hasPrevLink = data.prev ? true:false;
	const hasNextLink = data.next ? true:false;

	return (
		<div className="App">
			<div className="fixed-container">
				{hasPrevLink ? (
				<button disable={isLoading} id = "next" onClick={() => handleClick("prev")} className="btn-next">Prev</button>
				):null}
				{hasNextLink ? (
				<button disable={isLoading} id = "prev" onClick={() => handleClick("next")} className="btn-prev">Next</button>
				):null}
			</div>
			{characters.map(({ id, image, name, species, status }) => (
				<Character
					key={id}
					image={image}
					name={name}
					species={species}
					status={status}
				/>
			))}
		</div>
	);
}
export default App;





// const [users, setUsers] = useState([]);

// useEffect(() => {
// 	const getUsers = async () => {
// 		const response = await fetch("users.json");
// 		console.table(response);
// 		const data = await response.json();
// 		console.log(data);
// 		setUsers(data);
// 	};

// 	getUsers();
// }, []);

// const usersUI = users.map(({ id, firstName, lastName }) => (
// 	<UserName key={id} firstName={firstName} lastName={lastName} />
// ));










// import logo from './logo.svg';
// import './App.css';


// //Components
// import Greeting from './components/Greeting';
// import FullName from './components/FullName';
// import Calculator from './components/Calculator';
// import Counter from './components/Counter';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Counter/>
//         <NavBar/>
//       </header>
//     </div>
//   );
// }

// export default App;
