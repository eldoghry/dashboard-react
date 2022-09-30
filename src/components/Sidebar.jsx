import "../styles/components/sidebar.scss";

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
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <h3 className="sidebar__title">dashboard</h3>
        <ul className="sidebar__list">
          <li>
            <NavLink to="/" className="link sidebar__listItem" end>
              <PollOutlinedIcon className="sidebar__icon" />
              home
            </NavLink>
          </li>

          <li>
            <NavLink to="/analytics" className="link sidebar__listItem">
              <InsightsOutlinedIcon className="sidebar__icon" />
              analytics
            </NavLink>
          </li>

          <li>
            <NavLink to="/sales" className="link sidebar__listItem">
              <TrendingUpOutlinedIcon className="sidebar__icon" />
              sales
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar__menu">
        <h3 className="sidebar__title">quick menu</h3>
        <ul className="sidebar__list">
          <li>
            <NavLink to="/users" className="link sidebar__listItem">
              <PersonOutlineOutlinedIcon className="sidebar__icon" />
              users
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className="link sidebar__listItem">
              <StorefrontOutlinedIcon className="sidebar__icon" />
              products
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className="link sidebar__listItem">
              <ShoppingCartOutlinedIcon className="sidebar__icon" />
              orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/transactions" className="link sidebar__listItem">
              <AttachMoneyOutlinedIcon className="sidebar__icon" />
              transactions
            </NavLink>
          </li>

          <li>
            <NavLink to="/reports" className="link sidebar__listItem">
              <BarChartOutlinedIcon className="sidebar__icon" />
              reports
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar__menu">
        <h3 className="sidebar__title">notification</h3>
        <ul className="sidebar__list">
          <li>
            <NavLink to="/mail" className="link sidebar__listItem">
              <EmailOutlinedIcon className="sidebar__icon" />
              mail
            </NavLink>
          </li>

          <li>
            <NavLink to="/message" className="link sidebar__listItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebar__icon" />
              message
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
