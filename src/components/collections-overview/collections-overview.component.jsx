import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Container } from "./collections-overview.styles";
import { GET_COLLECTIONS_WITH_PRODUCTS } from "../../graphql/queries";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = () => {
	const { loading, data } = useQuery(GET_COLLECTIONS_WITH_PRODUCTS);

	if (loading) return "Loading...";

	const { collections } = data;
	return (
		<Container>
			{collections.map(({ id, title, products }) => (
				<CollectionPreview key={id} title={title} products={products} />
			))}
		</Container>
	);
};

export default CollectionsOverview;
