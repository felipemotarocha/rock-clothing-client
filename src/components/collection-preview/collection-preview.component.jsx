import React from "react";
import { useHistory } from "react-router-dom";

import { default as CollectionItem } from "../collection-item/collection-item.container";

import { Container, Headline, Products } from "./collection-preview.styles";

const CollectionPreview = ({ title, products }) => {
	const history = useHistory();

	return (
		<Container>
			<Headline>
				<h2 onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
					{title}
				</h2>
			</Headline>
			<Products>
				{products
					.filter((product, index) => index < 4)
					.map((product) => (
						<CollectionItem key={product.id} product={product} />
					))}
			</Products>
		</Container>
	);
};

export default CollectionPreview;
