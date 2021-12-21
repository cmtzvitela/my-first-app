import React, { useEffect, useState } from "react";

// RR
import { useParams } from "react-router-dom";
import { getUser } from "../../services/users";

export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const response = await getUser(params.userID);
			console.log(response);
			setUser(response);
		};
		get();
	}, [params.userID]);

	return (
		<div>
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
		</div>
	);
}