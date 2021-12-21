import React, { useEffect, useState } from "react";

// Services
import { getUsers } from "../../services/users";

// Components
import Li from "../../components/Li";

export default function UsersList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const get = async () => {
			const response = await getUsers();
			const parsedResponse = Object.keys(response).map((key) => {
				const { firstName, lastName } = response[key];
				return {
					id: key,
					firstName,
					lastName,
				};
			});
			setUsers(parsedResponse);
		};

		get();
	}, []);

	return (
		<div>
			<ul>
				{users.map(({ id, firstName, lastName }) => (
					<Li key={id} id={id} firstName={firstName} lastName={lastName} />
				))}
			</ul>
		</div>
	);
}