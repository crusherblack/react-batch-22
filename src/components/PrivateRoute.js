import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useContext(UserContext);
  const { isLogin } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
