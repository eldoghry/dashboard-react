import { Link } from "react-router-dom";
import Table from "../../components/Table";
import "../../styles/page/user/users.scss";
import { userRequester } from "../../apiRequester";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getusers = async () => {
      try {
        setLoading(true);
        const res = await userRequester.get("/user");
        setLoading(false);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getusers();
  }, []);


  return (
    <div className="users">
      <div className="container box">
        <div className="users__titleContainer">
          <h2 className="box__title">users</h2>

          <div style={{ display: "flex", gap: "2rem" }}>
            <Link to="/user/new" className="link">
              <button className="btn btn-primary">create</button>
            </Link>
            {/* <button className="btn btn-danger">delete</button> */}
          </div>
        </div>

        {loading && <Loader />}

        {users.length > 0 && <Table type="users" rows={users} />}
      </div>
    </div>
  );
};

export default Users;
