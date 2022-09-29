import "../styles/page/Home.scss";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import WidgetSm from "../components/widget/WidgetSm";
import WidgetLg from "../components/widget/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Chart />
      <div className="widgetContainer">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
