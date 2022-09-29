import Table from "../components/Table";
import "../styles/page/Users.scss";

const Users = () => {
  return (
    <div className="users">
      <div className="container box">
        <div className="users__titleContainer">
          <h2 className="box__title">users</h2>
          <button className="btn btn-danger">delete</button>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Users;
