import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { GET_USER_PROFILE } from "../graphql/queries/server-queries";
import { SET_CURRENT_USER } from "../graphql/mutations/client-mutations";

import App from "./App";

const AppContainer = () => {
	const { data } = useQuery(GET_USER_PROFILE);
	const [setCurrentUser] = useMutation(SET_CURRENT_USER);

	useEffect(() => {
		const checkUserSession = async () => {
			if (data) {
				const authToken = localStorage.getItem("authToken");
				const user = data.userProfile;

				setCurrentUser({
					variables: {
						user,
						authToken,
					},
				});
			}
		};

		checkUserSession();
	}, [data, setCurrentUser]);

	return <App />;
};

export default AppContainer;
