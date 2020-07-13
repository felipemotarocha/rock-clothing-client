import React from "react";
import { useMutation } from "@apollo/react-hooks";

import {
	DECREASE_CART_PRODUCT_QUANTITY,
	ADD_PRODUCT_TO_CART,
	CLEAR_CART_PRODUCT,
} from "../../graphql/mutations/client-mutations";

import CartProduct from "./cart-product.component";

const CartProductContainer = ({ product }) => {
	const [decreaseCartProductQuantity] = useMutation(
		DECREASE_CART_PRODUCT_QUANTITY,
		{
			variables: { product },
		}
	);

	const [addProductToCart] = useMutation(ADD_PRODUCT_TO_CART, {
		variables: { product },
	});

	const [clearCartProduct] = useMutation(CLEAR_CART_PRODUCT, {
		variables: { product },
	});

	return (
		<CartProduct
			product={product}
			decreaseCartProductQuantity={decreaseCartProductQuantity}
			addProductToCart={addProductToCart}
			clearCartProduct={clearCartProduct}
		/>
	);
};

export default CartProductContainer;
