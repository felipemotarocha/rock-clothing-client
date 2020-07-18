import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			user {
				id
				name
				email
			}
			authToken
		}
	}
`;

export const REGISTER_USER = gql`
	mutation Register($name: String!, $email: String!, $password: String!) {
		register(name: $name, email: $email, password: $password) {
			user {
				id
				name
				email
			}
			authToken
		}
	}
`;
