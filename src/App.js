import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Form from "./pages/Form";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about">
            <h1>adwawdadw</h1>
            <About />
            <h1>adwawdadw</h1>
          </Route>
          <PrivateRoute exact path="/form" component={Form} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
