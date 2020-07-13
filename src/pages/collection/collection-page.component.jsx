import React from "react";

import { Container, Headline } from "./collection-page.styles";
import { default as CollectionItem } from "../../components/collection-item/collection-item.container";

const CollectionPage = ({ collectionTitle, products }) => {
	return (
		<Container>
			<Headline>
				<h2>{collectionTitle}</h2>
			</Headline>
			{products.map((product) => (
				<CollectionItem key={product.id} product={product} />
			))}
		</Container>
	);
};

export default CollectionPage;
