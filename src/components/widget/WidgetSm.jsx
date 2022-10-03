import "../../styles/components/widget/widgetSm.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import { userRequester } from "../../apiRequester";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        setLoading(true);
        const res = await userRequester.get("/user/?new=true");
        setLoading(false);
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);


  return (
    <div className="box widgetSm">
      <h2 className="box__title">new join memebers</h2>

      {loading && <Loader />}

      {newUsers.map((user) => (
        <div className="widgetSm__item" key={user._id}>
          <div className="widgetSm__user">
            <img
              src={
                user.img ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt={user.username}
              className="widgetSm__avatar avatar"
            />
            <div className="widgetSm__userInfo">
              <span className="widgetSm__name">{user.username}</span>
              <span className="widgetSm__jobtitle">{user.email}</span>
            </div>
          </div>

          <Link to={`user/${user._id}`} className="link">
            <button className="widgetSm__btn btn btn-sm">
              <VisibilityOutlinedIcon className="widgetSm__icon" />
              display
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WidgetSm;
