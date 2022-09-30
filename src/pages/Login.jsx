import { useState } from "react";
import "../styles/page/login.scss";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div className="login">
      <div className="wrapper">
        <h1>Admin Dashboard</h1>
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
        <span className="error"></span>
      </div>
    </div>
  );
};

export default Home;
