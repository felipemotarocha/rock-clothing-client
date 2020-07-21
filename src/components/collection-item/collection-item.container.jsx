import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { ADD_CART_PRODUCT } from "../../graphql/mutations/client-mutations";
import CollectionItem from "./collection-item.component";

const CollectionItemContainer = ({ product }) => {
	const [addCartProduct] = useMutation(ADD_CART_PRODUCT, {
		variables: { product },
	});

	return <CollectionItem product={product} addCartProduct={addCartProduct} />;
};

export default CollectionItemContainer;
