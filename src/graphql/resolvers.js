import { gql } from "apollo-boost";

import {
	addCartProduct,
	getCartProductsCount,
	getCartProductsTotal,
	decreaseCartProductQuantity,
	clearCartProduct,
} from "./cart/cart.utils";
import {
	GET_CART_PRODUCTS,
	GET_CART_PRODUCTS_COUNT,
	GET_CART_PRODUCTS_TOTAL,
	GET_CART_DRAWER_HIDDEN,
	GET_CURRENT_USER,
} from "./queries/client-queries";

export const typeDefs = gql`
	extend type Product {
		quantity: Int
	}

	extend type Mutation {
		AddCartProduct(product: Product!): [Product]!
		ToggleCartDrawerHidden: Boolean!
		DecreaseProductCartQuantity(product: Product!): [Product]!
		ClearCartProduct(product: Product!): [Product]!
		SetCurrentUser(user: User!): User!
		LogoutCurrentUser: Boolean!
	}
`;

const updateCartProductsRelatedQueries = (cache, newCartProducts) => {
	cache.writeQuery({
		query: GET_CART_PRODUCTS,
		data: { cartProducts: newCartProducts },
	});

	cache.writeQuery({
		query: GET_CART_PRODUCTS_COUNT,
		data: { cartProductsCount: getCartProductsCount(newCartProducts) },
	});

	cache.writeQuery({
		query: GET_CART_PRODUCTS_TOTAL,
		data: { cartProductsTotal: getCartProductsTotal(newCartProducts) },
	});
};

export const resolvers = {
	Mutation: {
		toggleCartDrawerHidden: (_root, _args, { cache }) => {
			const { cartDrawerHidden } = cache.readQuery({
				query: GET_CART_DRAWER_HIDDEN,
			});

			cache.writeQuery({
				query: GET_CART_DRAWER_HIDDEN,
				data: { cartDrawerHidden: !cartDrawerHidden },
			});

			return !cartDrawerHidden;
		},
		addCartProduct: (_root, { product }, { cache }) => {
			const { cartProducts } = cache.readQuery({
				query: GET_CART_PRODUCTS,
			});

			const newCartProducts = addCartProduct(cartProducts, product);
			updateCartProductsRelatedQueries(cache, newCartProducts);

			return newCartProducts;
		},
		decreaseCartProductQuantity: (_root, { product: { id } }, { cache }) => {
			const { cartProducts } = cache.readQuery({
				query: GET_CART_PRODUCTS,
			});

			const newCartProducts = decreaseCartProductQuantity(cartProducts, id);
			updateCartProductsRelatedQueries(cache, newCartProducts);

			return newCartProducts;
		},
		clearCartProduct: (_root, { product: { id } }, { cache }) => {
			const { cartProducts } = cache.readQuery({
				query: GET_CART_PRODUCTS,
			});

			const newCartProducts = clearCartProduct(cartProducts, id);
			updateCartProductsRelatedQueries(cache, newCartProducts);

			return newCartProducts;
		},
		setCurrentUser: (_root, { user, authToken }, { cache }) => {
			cache.writeQuery({
				query: GET_CURRENT_USER,
				data: { currentUser: user },
			});

			localStorage.setItem("authToken", authToken);

			return user;
		},
		logoutCurrentUser: (_root, _args, { cache }) => {
			cache.writeQuery({
				query: GET_CURRENT_USER,
				data: { currentUser: null },
			});

			localStorage.removeItem("authToken");
		},
	},
};
