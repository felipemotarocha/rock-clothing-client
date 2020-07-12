import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { default as data } from "./graphql/initial-data";
import { typeDefs, resolvers } from "./graphql/resolvers";
import "./index.css";

const httpLink = createHttpLink({
	uri: "http://localhost:5000/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
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
