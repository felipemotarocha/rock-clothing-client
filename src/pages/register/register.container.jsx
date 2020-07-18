import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { REGISTER_USER } from "../../graphql/mutations/server-mutations";

import RegisterPage from "./register.component";

const RegisterPageContainer = () => {
	const [registerUser] = useMutation(REGISTER_USER);
	return <RegisterPage registerUser={registerUser} />;
};

export default RegisterPageContainer;
