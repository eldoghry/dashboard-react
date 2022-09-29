import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Users from "./pages/user/Users";
import User from "./pages/user/User";
import NewUser from "./pages/user/NewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/user/new" element={<NewUser />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
