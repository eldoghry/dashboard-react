import "./Sidebar.scss";

import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <h3 className="sidebar__title">dashboard</h3>
        <ul className="sidebar__list">
          <li className="sidebar__listItem active">
            <PollOutlinedIcon className="sidebar__icon" />
            home
          </li>

          <li className="sidebar__listItem">
            <InsightsOutlinedIcon className="sidebar__icon" />
            analytics
          </li>

          <li className="sidebar__listItem">
            <TrendingUpOutlinedIcon className="sidebar__icon" />
            sales
          </li>
        </ul>
      </div>

      <div className="sidebar__menu">
        <h3 className="sidebar__title">quick menu</h3>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">
            <PersonOutlineOutlinedIcon className="sidebar__icon" />
            users
          </li>

          <li className="sidebar__listItem">
            <StorefrontOutlinedIcon className="sidebar__icon" />
            products
          </li>

          <li className="sidebar__listItem">
            <ShoppingCartOutlinedIcon className="sidebar__icon" />
            orders
          </li>

          <li className="sidebar__listItem">
            <AttachMoneyOutlinedIcon className="sidebar__icon" />
            transactions
          </li>

          <li className="sidebar__listItem">
            <BarChartOutlinedIcon className="sidebar__icon" />
            reports
          </li>
        </ul>
      </div>

      <div className="sidebar__menu">
        <h3 className="sidebar__title">notification</h3>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">
            <EmailOutlinedIcon className="sidebar__icon" />
            mail
          </li>

          <li className="sidebar__listItem">
            <ChatBubbleOutlineOutlinedIcon className="sidebar__icon" />
            message
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
