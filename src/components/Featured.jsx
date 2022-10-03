import { useEffect, useState } from "react";
import { userRequester } from "../apiRequester";
import "../styles/components/featured.scss";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  const [revanue, setRevanue] = useState(0);
  const [revanueRate, setRevanueRate] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequester.get("order/stats/income");

        setRevanue(res.data[1].total - res.data[0].total);
        setRevanueRate((res.data[1].total / res.data[0].total) * 100);
      } catch (error) {}
    };

    getIncome();
  }, []);

  return (
    <div className="featured">
      <FeaturedItem
        title={`revanue`}
        num={revanue}
        rate={revanueRate}
        type="currancy"
      />
      <FeaturedItem title={`sales`} num={2145} rate={-11.2} type="currancy" />
      <FeaturedItem title={`cost`} num={2145} rate={-11.2} type="currancy" />
      <FeaturedItem title={`cost`} num={2145} rate={-11.2} type="currancy" />
    </div>
  );
};

export default Featured;
