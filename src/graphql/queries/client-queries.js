import { gql } from "apollo-boost";

export const GET_CART_PRODUCTS = gql`
	{
		cartProducts @client
	}
`;

export const GET_CART_PRODUCTS_COUNT = gql`
	{
		cartProductsCount @client
	}
`;

export const GET_CART_PRODUCTS_TOTAL = gql`
	{
		cartProductsTotal @client
	}
`;

export const GET_CART_DRAWER_HIDDEN = gql`
	{
		cartDrawerHidden @client
	}
`;
