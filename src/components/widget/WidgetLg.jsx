import "../../styles/components/widget/widgetLg.scss";

const WidgetLg = () => {
  return (
    <div className="box widgetLg">
      <h2 className="box__title">last transactions</h2>

      <table className="widgetLg__table">
        <thead>
          <tr>
            <th className="widgetLg__th">customer</th>
            <th className="widgetLg__th">Date</th>
            <th className="widgetLg__th">amount</th>
            <th className="widgetLg__th">status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLg__tr">
            <td className="widgetLg__name">
              <img
                className="avatar widgetLg__img"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="jon img"
              />
              Jon Snow
            </td>
            <td className="widgetLg__date">02/12/2022</td>
            <td className="widgetLg__amount">$155.00</td>
            <td>
              <button className="widgetLg__statusBtn widgetLg__statusBtn--approved">
                approved
              </button>
            </td>
          </tr>

          <tr className="widgetLg__tr">
            <td className="widgetLg__name">
              <img
                className="avatar widgetLg__img"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="jon img"
              />
              Jon Snow
            </td>
            <td className="widgetLg__date">02/12/2022</td>
            <td className="widgetLg__amount">$155.00</td>
            <td>
              <button className="widgetLg__statusBtn widgetLg__statusBtn--approved">
                approved
              </button>
            </td>
          </tr>

          <tr className="widgetLg__tr">
            <td className="widgetLg__name">
              <img
                className="avatar widgetLg__img"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="jon img"
              />
              Jon Snow
            </td>
            <td className="widgetLg__date">02/12/2022</td>
            <td className="widgetLg__amount">$155.00</td>
            <td>
              <button className="widgetLg__statusBtn widgetLg__statusBtn--pending">
                pending
              </button>
            </td>
          </tr>

          <tr className="widgetLg__tr">
            <td className="widgetLg__name">
              <img
                className="avatar widgetLg__img"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="jon img"
              />
              Jon Snow
            </td>
            <td className="widgetLg__date">02/12/2022</td>
            <td className="widgetLg__amount">$155.00</td>
            <td>
              <button className="widgetLg__statusBtn widgetLg__statusBtn--rejected">
                rejected
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
