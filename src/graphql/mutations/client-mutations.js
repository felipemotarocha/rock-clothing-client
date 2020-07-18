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

export const DECREASE_CART_PRODUCT_QUANTITY = gql`
	mutation DecreaseCartProductQuantity($product: Product) {
		decreaseCartProductQuantity(product: $product) @client
	}
`;

export const CLEAR_CART_PRODUCT = gql`
	mutation ClearCartProduct($product: Product) {
		clearCartProduct(product: $product) @client
	}
`;

export const SET_CURRENT_USER = gql`
	mutation SetCurrentUser($user: User!, $authToken: String!) {
		setCurrentUser(user: $user, authToken: $authToken) @client
	}
`;

export const LOGOUT_CURRENT_USER = gql`
	mutation LogoutCurrentUser {
		logoutCurrentUser @client
	}
`;
