import "../../styles/page/user/new.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";

const newUser = () => {
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
            />
          </div>

          <div className="newUser__radio">
            <span className="newUser__radioHeading">Gender:</span>

            <input
              type="radio"
              name="gender"
              value="male"
              className="newUser__radioInput"
              id="password"
            />
            <label htmlFor="male" className="newUser__radioLabel">
              male
            </label>

            <input
              type="radio"
              name="gender"
              value="female"
              className="newUser__radioInput"
              id="password"
            />
            <label htmlFor="female" className="newUser__radioLabel">
              female
            </label>
          </div>

          <div className="newUser__selectContainer">
            <span className="newUser__select-heading">Status:</span>

            <select className="newUser__select">
              <option value="active">active</option>
              <option value="disabled">disabled</option>
            </select>
          </div>

          <button
            className="btn btn-warning"
            style={{ alignSelf: "flex-end", width: "15rem" }}
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default newUser;
