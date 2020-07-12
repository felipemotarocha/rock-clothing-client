import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home-page.component";
import Navbar from "./components/navbar/navbar.component";
import ShopPage from "./pages/shop/shop-page.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
};

export default App;
