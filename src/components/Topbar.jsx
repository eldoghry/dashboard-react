import "./Topbar.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__leftContainer">
        <h2 className="topbar__logo">Dashboard</h2>
      </div>
      <div className="topbar__rightContainer">
        <div className="topbar__item">
          <SettingsOutlinedIcon className="topbar__icon" />
          {/* <span className="topper__badge">2</span> */}
        </div>
        <div className="topbar__item">
          <NotificationsNoneOutlinedIcon className="topbar__icon" />
          <span className="topbar__badge">2</span>
        </div>

        <div className="topbar__item">
          <img
            alt="profile image"
            src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="topbar__img"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
