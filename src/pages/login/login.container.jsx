import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { LOGIN_USER } from "../../graphql/mutations/server-mutations";

import LoginPage from "./login.component";

const LoginPageContainer = () => {
	const [loginUser] = useMutation(LOGIN_USER);
	return <LoginPage loginUser={loginUser} />;
};

export default LoginPageContainer;
