import { useEffect, useState } from "react";
import "../styles/page/login.scss";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const userState = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setError("");
      login({ username, password }, dispatch);
      userState.error && setError("Unauthorized");
    } else {
      setError("Username & password required");
    }
  };

  useEffect(() => {
    if (user.isAdmin) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="login">
      <div className="wrapper">
        <h1>Admin Dashboard</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary" onClick={handleLogin}>
            Log In
          </button>
        </form>
        <span className="error">{error}</span>
      </div>
    </div>
  );
};

export default Home;
