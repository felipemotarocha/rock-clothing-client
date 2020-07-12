import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home-page.component";
import Navbar from "./components/navbar/navbar.component";
import CollectionPage from "./pages/collection/collection-page.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop/:collectionTitle" exact component={CollectionPage} />
      </Switch>
    </>
  );
};

export default App;
