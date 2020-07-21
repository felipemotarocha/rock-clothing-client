import React from "react";
import { useMutation } from "@apollo/react-hooks";

import CheckoutProduct from "./checkout-product.component";

import {
	ADD_CART_PRODUCT,
	DECREASE_CART_PRODUCT_QUANTITY,
	CLEAR_CART_PRODUCT,
} from "../../graphql/mutations/client-mutations";

const CheckoutProductContainer = ({ product }) => {
	const [addCartProduct] = useMutation(ADD_CART_PRODUCT, {
		variables: { product },
	});

	const [
		decreaseCartProductQuantity,
	] = useMutation(DECREASE_CART_PRODUCT_QUANTITY, { variables: { product } });

	const [clearCartProduct] = useMutation(CLEAR_CART_PRODUCT, {
		variables: { product },
	});

	return (
		<CheckoutProduct
			addCartProduct={addCartProduct}
			decreaseCartProductQuantity={decreaseCartProductQuantity}
			clearCartProduct={clearCartProduct}
			product={product}
		/>
	);
};

export default CheckoutProductContainer;
