import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import { REGISTER_USER } from "../../graphql/mutations/server-mutations";
import { SET_CURRENT_USER } from "../../graphql/mutations/client-mutations";
import { GET_CURRENT_USER } from "../../graphql/queries/client-queries";

import Spinner from "../../components/spinner/spinner.component";
import RegisterPage from "./register.component";

const RegisterPageContainer = () => {
	const {
		loading,
		data: { currentUser },
	} = useQuery(GET_CURRENT_USER);

	const history = useHistory();

	useEffect(() => {
		if (currentUser) return history.push("/");
	}, [currentUser, history]);

	const [setCurrentUser] = useMutation(SET_CURRENT_USER);
	const [registerUser] = useMutation(REGISTER_USER, {
		onCompleted({ register: { user, authToken } }) {
			setCurrentUser({ variables: { user, authToken } });
			return history.push("/");
		},
	});

	if (loading) return <Spinner />;

	return <RegisterPage registerUser={registerUser} />;
};

export default RegisterPageContainer;
