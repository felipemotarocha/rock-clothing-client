import React from "react";

import { default as CartProduct } from "../cart-product/cart-product.container";

import {
	Products,
	ProductsContainer,
	ProductsHeadline,
} from "./cart-drawer-products.styles";

const CartDrawerProducts = ({ cartProducts }) => {
	return (
		<ProductsContainer>
			<Products>
				<ProductsHeadline>
					<h2>Your cart</h2>
				</ProductsHeadline>
				{cartProducts.map((product) => (
					<CartProduct key={product.id} product={product} />
				))}
			</Products>
		</ProductsContainer>
	);
};

export default CartDrawerProducts;
