import "../styles/components/Featured.scss";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  return (
    <div className="featured">
      <FeaturedItem title={`revanue`} num={2145} rate={11.2} type="currancy" />
      <FeaturedItem title={`sales`} num={2145} rate={-11.2} type="currancy" />
      <FeaturedItem title={`cost`} num={2145} rate={-11.2} type="currancy" />
      <FeaturedItem title={`cost`} num={2145} rate={-11.2} type="currancy" />
    </div>
  );
};

export default Featured;
