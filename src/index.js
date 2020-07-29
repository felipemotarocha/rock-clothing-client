import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { BrowserRouter as Router } from "react-router-dom";
// import { persistCache } from "apollo-cache-persist";

import { default as App } from "./App/App.container";

import { default as data } from "./graphql/initial-data";
import { typeDefs, resolvers } from "./graphql/resolvers";
import "./index.css";

const httpLink = createHttpLink({
	uri: "http://localhost:5000/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("authToken");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const cache = new InMemoryCache();

// const setupAndRender = async () => {
// 	await persistCache({
// 		cache,
// 		storage: window.localStorage,
// 	});
// };

// setupAndRender();

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	typeDefs,
	resolvers,
});

client.writeData({ data });

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById("root")
);
