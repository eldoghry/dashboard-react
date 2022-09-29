import "../../styles/page/product/product.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="">
        <div className="user__titleContainer">
          <h2 className="box__title">user</h2>
          <Link to="/user/new" className="link">
            <button className="btn btn-primary">create</button>
          </Link>
        </div>

        <div className="user__wrapper">
          <div className="user__details box">
            <div className="user__top">
              <img
                className="avatar user__img"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
              <div className="user__info">
                <span className="user__name">Mohamed Magdy</span>
                <span className="user__jobtitle">Web developer</span>
              </div>
            </div>

            <ul className="user__list">
              <h3 className="user__list-heading">Account Details</h3>
              <li className="user__item">
                <FingerprintOutlinedIcon className="user__icon" />
                8879456878676478
              </li>

              <li className="user__item">
                <PersonOutlinedIcon className="user__icon" />
                mma90
              </li>
              <li className="user__item">
                <DateRangeOutlinedIcon className="user__icon" />
                01/01/1990
              </li>
              <h3 className="user__list-heading">Contact Details</h3>
              <li className="user__item">
                <PhoneAndroidOutlinedIcon className="user__icon" />
                +2 011 4349 7899
              </li>
              <li className="user__item">
                <EmailOutlinedIcon className="user__icon" />
                moh.mag.ali@gmail.com
              </li>
              <li className="user__item">
                <LocationOnOutlinedIcon className="user__icon" />
                Cairo, Egypt
              </li>
            </ul>
          </div>

          <div className="user__formContainer box">
            <h2 className="box__title">edit user</h2>

            <form className="user__form">
              <div className="user__form-left">
                <div className="user__form-item">
                  <label htmlFor="firstname" className="user__form-label">
                    firstname
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    className="user__form-input"
                    id="firstname"
                  />
                </div>

                <div className="user__form-item">
                  <label htmlFor="lastname" className="user__form-label">
                    lastname
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    className="user__form-input"
                    id="lastname"
                  />
                </div>

                <div className="user__form-item">
                  <label htmlFor="username" className="user__form-label">
                    username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="user__form-input"
                    id="username"
                  />
                </div>

                <div className="user__form-item">
                  <label htmlFor="email" className="user__form-label">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="user__form-input"
                    id="email"
                  />
                </div>

                <div className="user__form-item">
                  <label htmlFor="password" className="user__form-label">
                    password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="user__form-input"
                    id="password"
                  />
                </div>
              </div>
              <div className="user__form-right">
                <div className="user__form-imgContainer">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    className="user__form-img"
                  />

                  <label htmlFor="userImg" className="user__form-label--img">
                    <DriveFolderUploadOutlinedIcon className="user__form-icon" />
                  </label>

                  <input
                    type="file"
                    name="userImg"
                    id="userImg"
                    className="user__form-input--file"
                  />
                </div>

                <button className="btn btn-warning">update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
