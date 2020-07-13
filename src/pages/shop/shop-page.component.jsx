import React from "react";
import { Switch, Route } from "react-router-dom";

import { default as CollectionPage } from "../collection/collection-page.container";
import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";

const ShopPage = () => {
	return (
		<Switch>
			<Route exact path="/shop" component={CollectionsOverview} />
			<Route exact path="/shop/:collectionTitle" component={CollectionPage} />
		</Switch>
	);
};

export default ShopPage;
