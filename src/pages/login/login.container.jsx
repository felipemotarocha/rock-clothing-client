import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import { LOGIN_USER } from "../../graphql/mutations/server-mutations";
import { SET_CURRENT_USER } from "../../graphql/mutations/client-mutations";
import { GET_CURRENT_USER } from "../../graphql/queries/client-queries";

import Spinner from "../../components/spinner/spinner.component";

import LoginPage from "./login.component";

const LoginPageContainer = () => {
	const {
		loading,
		data: { currentUser },
	} = useQuery(GET_CURRENT_USER);

	const history = useHistory();

	useEffect(() => {
		if (currentUser) return history.push("/");
	}, [currentUser, history]);

	const [setCurrentUser] = useMutation(SET_CURRENT_USER);
	const [loginUser] = useMutation(LOGIN_USER, {
		onCompleted({ login: { user, authToken } }) {
			setCurrentUser({ variables: { user, authToken } });
			return history.push("/");
		},
	});

	if (loading) return <Spinner />;

	return <LoginPage loginUser={loginUser} />;
};

export default LoginPageContainer;
