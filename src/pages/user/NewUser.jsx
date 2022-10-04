import "../../styles/page/user/new.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequester } from "../../apiRequester";

const NewUser = () => {
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("active");

  const handleClick = (e) => {
    e.preventDefault();

    console.log(user);
    console.log(file);

    //TODO: validate inputs

    const createUser = async () => {
      try {
        const res = await userRequester.post("user", user);
        console.log(res);
      } catch (error) {
        console.log();
      }
    };

    createUser();
  };

  return (
    <div className="newUser">
      <div className="newUser__wrapper box">
        <h2 className="box__title">Create User</h2>

        <form className="newUser__form">
          <div className="newUser__form-top">
            <div className="newUser__form-item">
              <label htmlFor="firstname" className="newUser__form-label">
                firstname
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="firstname"
                className="newUser__form-input"
                id="firstname"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="newUser__form-item">
              <label htmlFor="lastname" className="newUser__form-label">
                lastname
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="lastname"
                className="newUser__form-input"
                id="lastname"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="newUser__form-item">
              <label htmlFor="username" className="newUser__form-label">
                username
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="newUser__form-input"
                id="username"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="newUser__form-item">
              <label htmlFor="email" className="newUser__form-label">
                email
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="newUser__form-input"
                id="email"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="newUser__form-item">
              <label htmlFor="password" className="newUser__form-label">
                password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="newUser__form-input"
                id="password"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="newUser__form-imgContainer">
            <img
              src="https://via.placeholder.com/100"
              alt="image"
              className="newUser__form-img"
            />

            <label htmlFor="newUserImg" className="newUser__form-label--img">
              <DriveFolderUploadOutlinedIcon className="newUser__form-icon" />
            </label>

            <input
              type="file"
              name="newUserImg"
              id="newUserImg"
              className="newUser__form-input--file"
              onChange={(e) => setFile(e.target.value)}
            />
          </div>

          <div className="newUser__radio">
            <span className="newUser__radioHeading">Gender:</span>

            <input
              type="radio"
              name="gender"
              value="male"
              className="newUser__radioInput"
              id="male"
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
              }}
            />
            <label htmlFor="male" className="newUser__radioLabel">
              male
            </label>

            <input
              type="radio"
              name="gender"
              value="female"
              className="newUser__radioInput"
              id="female"
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
              }}
            />
            <label htmlFor="female" className="newUser__radioLabel">
              female
            </label>
          </div>

          <div className="newUser__selectContainer">
            <span className="newUser__select-heading">Status:</span>

            <select
              name="status"
              className="newUser__select"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              defaultValue={status}
            >
              <option value="active">active</option>
              <option value="disabled">disabled</option>
            </select>
          </div>

          <button
            className="btn btn-warning"
            style={{ alignSelf: "flex-end", width: "15rem" }}
            onClick={handleClick}
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
