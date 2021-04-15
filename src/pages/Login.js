import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Login = () => {
  const [, dispatch] = useContext(UserContext);

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
    });
  };

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        height: "90vh",
      }}
    >
      <button onClick={handleLogin} className="btn btn-primary">
        LOGIN
      </button>
      <button onClick={handleLogOut} className="mt-3 btn btn-danger">
        LOGOUT
      </button>
    </div>
  );
};

export default Login;
