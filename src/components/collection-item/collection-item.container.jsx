import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { ADD_PRODUCT_TO_CART } from "../../graphql/mutations/client-mutations";
import CollectionItem from "./collection-item.component";

const CollectionItemContainer = ({ product }) => {
	const [addProductToCart] = useMutation(ADD_PRODUCT_TO_CART, {
		variables: { product },
	});

	return (
		<CollectionItem product={product} addProductToCart={addProductToCart} />
	);
};

export default CollectionItemContainer;
