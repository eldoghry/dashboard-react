import { Link } from "react-router-dom";
import Table from "../../components/Table";
import "../../styles/page/user/users.scss";
import { tableRows } from "../../dummyDate";

const Users = () => {
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

        <Table type="users" rows={tableRows} />
      </div>
    </div>
  );
};

export default Users;
