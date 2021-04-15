import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import { UserContextProvider } from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Wrapper from "./components/Wrapper";

import Form from "./pages/Form";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Product from "./pages/Products";
import ProductDetail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartContextProvider>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Wrapper>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/products" component={Product} />
              <PrivateRoute
                exact
                path="/product/:id"
                component={ProductDetail}
              />
              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute exact path="/form" component={Form} />

              <Route exact path="/login" component={Login} />
              <Route exact path="/about">
                <h1>adwawdadw</h1>
                <About />
                <h1>adwawdadw</h1>
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Wrapper>
        </Router>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;
