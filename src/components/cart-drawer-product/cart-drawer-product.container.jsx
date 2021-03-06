import React from "react";
import { useMutation } from "@apollo/react-hooks";

import {
	DECREASE_CART_PRODUCT_QUANTITY,
	ADD_CART_PRODUCT,
	CLEAR_CART_PRODUCT,
} from "../../graphql/mutations/client-mutations";

import CartProduct from "./cart-drawer-product.component";

const CartProductContainer = ({ product }) => {
	const [decreaseCartProductQuantity] = useMutation(
		DECREASE_CART_PRODUCT_QUANTITY,
		{
			variables: { product },
		}
	);

	const [addCartProduct] = useMutation(ADD_CART_PRODUCT, {
		variables: { product },
	});

	const [clearCartProduct] = useMutation(CLEAR_CART_PRODUCT, {
		variables: { product },
	});

	return (
		<CartProduct
			product={product}
			decreaseCartProductQuantity={decreaseCartProductQuantity}
			addCartProduct={addCartProduct}
			clearCartProduct={clearCartProduct}
		/>
	);
};

export default CartProductContainer;
