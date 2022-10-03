import "../styles/page/home.scss";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import WidgetSm from "../components/widget/WidgetSm";
import WidgetLg from "../components/widget/WidgetLg";
import { useEffect, useState } from "react";
import { userRequester } from "../apiRequester";

const Home = () => {
  const [ordersPerMonth, setOrdersPerMonth] = useState([]);

  useEffect(() => {
    const getOrderPerMonth = async () => {
      try {
        const res = await userRequester.get("order/stats/ordersPerMonth");

        setOrdersPerMonth([...res.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderPerMonth();
  }, []);

  return (
    <div className="home">
      <Featured />
      <Chart
        data={ordersPerMonth}
        xDataKey="_id"
        yDataKey="count"
        title="Orders Per Month"
      />
      <div className="widgetContainer">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
