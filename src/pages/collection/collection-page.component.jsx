import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_COLLECTION_PRODUCTS } from "../../graphql/queries";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const CollectionPage = ({
  match: {
    params: { collectionTitle },
  },
}) => {
  const { loading, data } = useQuery(GET_COLLECTION_PRODUCTS, {
    variables: { title: collectionTitle },
  });

  if (loading) return "Loading...";

  const {
    collection: { products },
  } = data;
  return (
    <div>
      <CollectionOverview name={collectionTitle} products={products} />
    </div>
  );
};

export default CollectionPage;
