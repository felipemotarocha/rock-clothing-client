import React from "react";
import { Switch, Route } from "react-router-dom";

import CollectionPage from "../collection/collection-page.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
	return (
		<Switch>
			<Route exact path="/shop" component={CollectionsOverview} />
			<Route exact path="/shop/:collectionTitle" component={CollectionPage} />
		</Switch>
	);
};

export default ShopPage;
