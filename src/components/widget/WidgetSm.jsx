import "../../styles/components/widget/WidgetSm.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const WidgetSm = () => {
  return (
    <div className="widget widgetSm">
      <h2 className="widget__title">new join memebers</h2>

      <div className="widgetSm__item">
        <div className="widgetSm__user">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSm__avatar avatar"
          />
          <div className="widgetSm__userInfo">
            <span className="widgetSm__name">Mohamed Magdy</span>
            <span className="widgetSm__jobtitle">Web Developer</span>
          </div>
        </div>

        <button className="widgetSm__btn btn btn-sm">
          <VisibilityOutlinedIcon className="widgetSm__icon" />
          display
        </button>
      </div>

      <div className="widgetSm__item">
        <div className="widgetSm__user">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSm__avatar avatar"
          />
          <div className="widgetSm__userInfo">
            <span className="widgetSm__name">Mohamed Magdy</span>
            <span className="widgetSm__jobtitle">Web Developer</span>
          </div>
        </div>

        <button className="widgetSm__btn btn btn-sm">
          <VisibilityOutlinedIcon className="widgetSm__icon" />
          display
        </button>
      </div>

      <div className="widgetSm__item">
        <div className="widgetSm__user">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSm__avatar avatar"
          />
          <div className="widgetSm__userInfo">
            <span className="widgetSm__name">Mohamed Magdy</span>
            <span className="widgetSm__jobtitle">Web Developer</span>
          </div>
        </div>

        <button className="widgetSm__btn btn btn-sm">
          <VisibilityOutlinedIcon className="widgetSm__icon" />
          display
        </button>
      </div>

      <div className="widgetSm__item">
        <div className="widgetSm__user">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSm__avatar avatar"
          />
          <div className="widgetSm__userInfo">
            <span className="widgetSm__name">Mohamed Magdy</span>
            <span className="widgetSm__jobtitle">Web Developer</span>
          </div>
        </div>

        <button className="widgetSm__btn btn btn-sm">
          <VisibilityOutlinedIcon className="widgetSm__icon" />
          display
        </button>
      </div>
    </div>
  );
};

export default WidgetSm;
