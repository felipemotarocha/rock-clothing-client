import React from "react";
import { useHistory } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
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
					.map(({ id, name, price, imageUrl }) => (
						<CollectionItem
							key={id}
							name={name}
							price={price}
							imageUrl={imageUrl}
						/>
					))}
			</Products>
		</Container>
	);
};

export default CollectionPreview;
