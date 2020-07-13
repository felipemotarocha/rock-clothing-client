import { gql } from "apollo-boost";

export const ADD_PRODUCT_TO_CART = gql`
	mutation AddProductToCart($product: Product) {
		addProductToCart(product: $product) @client
	}
`;

export const TOGGLE_CART_DRAWER_HIDDEN = gql`
	mutation ToggleCartDrawerHidden {
		toggleCartDrawerHidden @client
	}
`;
