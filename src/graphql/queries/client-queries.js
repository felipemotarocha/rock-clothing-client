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
