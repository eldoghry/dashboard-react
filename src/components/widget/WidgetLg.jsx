import { useEffect, useState } from "react";
import "../../styles/components/widget/widgetLg.scss";
import { userRequester } from "../../apiRequester";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const res = await userRequester.get("/order/?new=true");
        setLoading(false);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="box widgetLg">
      <h2 className="box__title">last transactions</h2>

      {loading && <Loader />}

      {orders.length > 0 && (
        <>
          <table className="widgetLg__table">
            <thead>
              <tr>
                <th className="widgetLg__th" style={{ textAlign: "left" }}>
                  customer
                </th>
                <th className="widgetLg__th">Date</th>
                <th className="widgetLg__th">amount</th>
                <th className="widgetLg__th">status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr className="widgetLg__tr" key={order._id}>
                  <td className="widgetLg__name">
                    <Link to={`/order/${order._id}`} className="link">
                      {order.userId}
                    </Link>
                  </td>
                  <td className="widgetLg__date">{format(order.createdAt)}</td>
                  <td className="widgetLg__amount">${order.amount}</td>
                  <td>
                    <button
                      className={`widgetLg__statusBtn widgetLg__statusBtn--${order.status}`}
                    >
                      {order.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default WidgetLg;
