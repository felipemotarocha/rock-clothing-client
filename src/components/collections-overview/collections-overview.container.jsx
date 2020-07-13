import React from "react";
import { useQuery } from "@apollo/react-hooks";

import CollectionsOverview from "./collections-overview.component";

import { GET_COLLECTIONS_WITH_PRODUCTS } from "../../graphql/queries/server-queries";

const CollectionsOverviewContainer = () => {
	const { loading, data } = useQuery(GET_COLLECTIONS_WITH_PRODUCTS);

	if (loading) return "Loading...";

	const { collections } = data;
	return <CollectionsOverview collections={collections} />;
};

export default CollectionsOverviewContainer;
