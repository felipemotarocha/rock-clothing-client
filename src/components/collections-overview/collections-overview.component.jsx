import React from "react";

import { Container } from "./collections-overview.styles";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
	return (
		<Container>
			{collections.map(({ id, title, products }) => (
				<CollectionPreview key={id} title={title} products={products} />
			))}
		</Container>
	);
};

export default CollectionsOverview;
