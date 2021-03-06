import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

import { GET_COLLECTION_PRODUCTS } from "../../graphql/queries/server-queries";

import CollectionPage from "./collection-page.component";
import Spinner from "../../components/spinner/spinner.component";

const CollectionPageContainer = () => {
	const { collectionTitle } = useParams();

	const { loading, data } = useQuery(GET_COLLECTION_PRODUCTS, {
		variables: { title: collectionTitle },
	});

	if (loading) return <Spinner />;

	const {
		collection: { products },
	} = data;

	return (
		<CollectionPage collectionTitle={collectionTitle} products={products} />
	);
};

export default CollectionPageContainer;
