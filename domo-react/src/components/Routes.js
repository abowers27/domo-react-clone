import { Switch, Route } from "react-router-dom";
// import { MensClothing } from "./MensClothing";
// import { WomensClothing } from "./WomensClothing";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/product">
        <Product />
      </Route>
      {/* <Route path="/womens-clothing">
        <WomensClothing />
      </Route>
      <Route path="/:id">
        <p>
          this text will render for any route other than those defined above
        </p>
      </Route> */}
    </Switch>
  );
};
