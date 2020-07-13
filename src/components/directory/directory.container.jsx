import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_COLLECTIONS } from "../../graphql/queries/server-queries";
import Directory from "./directory.component";

const DirectoryContainer = () => {
	const { loading, data } = useQuery(GET_COLLECTIONS);

	if (loading) return "Loading...";

	const { collections } = data;
	return <Directory collections={collections} />;
};

export default DirectoryContainer;
