import "./../styles/components/topbar.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__leftContainer">
        <h2 className="topbar__logo">
          <Link to="/" className="link">
            Dashboard
          </Link>
        </h2>
      </div>
      <div className="topbar__rightContainer">
        <div className="topbar__item">
          <NotificationsNoneOutlinedIcon className="topbar__icon" />
          <span className="topbar__badge">2</span>
        </div>
        <div className="topbar__item">
          <SettingsOutlinedIcon className="topbar__icon" />
        </div>

        <div className="topbar__item">
          <LanguageOutlinedIcon className="topbar__icon" />
        </div>

        <div className="topbar__item">
          <img
            alt="profile image"
            src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="topbar__img avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
