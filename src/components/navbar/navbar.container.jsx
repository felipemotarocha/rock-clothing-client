import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { GET_CURRENT_USER } from "../../graphql/queries/client-queries";
import { LOGOUT_CURRENT_USER } from "../../graphql/mutations/client-mutations";

import Navbar from "./navbar.component";

const NavbarContainer = () => {
	const {
		data: { currentUser },
	} = useQuery(GET_CURRENT_USER);

	const [logoutCurrentUser] = useMutation(LOGOUT_CURRENT_USER);

	return (
		<Navbar currentUser={currentUser} logoutCurrentUser={logoutCurrentUser} />
	);
};

export default NavbarContainer;
