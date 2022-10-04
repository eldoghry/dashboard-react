import { Link } from "react-router-dom";
import Table from "../../components/Table";
import "../../styles/page/user/users.scss";
import { userRequester } from "../../apiRequester";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getUsers(dispatch);
    setLoading(false);
  }, [dispatch]);

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

        {users.length > 0 && <Table type="user" rows={users} />}
      </div>
    </div>
  );
};

export default Users;
