import "../styles/components/featuredItem.scss";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const FeaturedItem = ({ title, num, rate, type }) => {
  return (
    <div className="featuredItem">
      <span className="featuredItem__title">{title}</span>
      <div className="featuredItem__numContainer">
        <span className="featuredItem__num">
          {type === "currancy" ? "$" : ""}
          {num}
        </span>
        <span className="featuredItem__rate">
          {rate}
          {rate >= 0 ? (
            <ArrowUpwardOutlinedIcon className="featuredItem__arrow" />
          ) : (
            <ArrowDownwardOutlinedIcon className="featuredItem__arrow featuredItem__arrow--negative" />
          )}
        </span>
      </div>
      <span className="featuredItem__compare">compared to last month</span>
    </div>
  );
};

export default FeaturedItem;
