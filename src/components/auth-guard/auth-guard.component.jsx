import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import { GET_USER_PROFILE } from "../../graphql/queries/server-queries";
import Spinner from "../spinner/spinner.component";

const AuthGuard = ({ children }) => {
	const history = useHistory();
	const { data, loading } = useQuery(GET_USER_PROFILE);

	if (!loading && !data) history.push("/login");

	return <>{loading ? <Spinner /> : children}</>;
};

export default AuthGuard;
