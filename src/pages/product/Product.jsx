import "../../styles/page/product/product.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  LineChart,
  Line,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Product = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="product">
      <div className="box">
        <h2 className="box__heading">Edit Product</h2>

        <div className="product__top">
          <div className="product__chart">
            <ResponsiveContainer width="80%" aspect={4 / 1}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                {/* <XAxis /> */}
                {/* <YAxis /> */}
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            <span className="product__chartSpan">sales performance</span>
          </div>

          <div className="product__info">
            <div className="product__info-item">
              <span className="product__info-key">id:</span>
              <span className="product__info-value">35467186743694989</span>
            </div>
            <div className="product__info-item">
              <span className="product__info-key">sales:</span>
              <span className="product__info-value">512</span>
            </div>
            <div className="product__info-item">
              <span className="product__info-key">active:</span>
              <span className="product__info-value">yes</span>
            </div>
            <div className="product__info-item">
              <span className="product__info-key">in stock:</span>
              <span className="product__info-value">no</span>
            </div>
          </div>
        </div>

        <form className="product__form">
          <div className="product__formLeft">
            <div className="product__formItem">
              <label htmlFor="name" className="product__label">
                Product name
              </label>

              <input
                type="text"
                className="product__input"
                id="name"
                value="Nike Shoes"
              />
            </div>

            <div className="product__formItem">
              <label htmlFor="stock" className="product__label">
                in stock
              </label>

              <select
                name="stock"
                id="stock"
                className="product__select"
                defaultValue="yes"
              >
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div className="product__formItem">
              <label htmlFor="active" className="product__label">
                active
              </label>

              <select
                name="active"
                id="active"
                className="product__select"
                defaultValue="active"
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
          </div>

          <div className="product__formRight">
            <div className="product__formItem--file">
              <img
                src="https://sneakerbardetroit.com/wp-content/uploads/2019/02/Nike-Adapt-BB-2.png"
                alt=""
                className="product__formImg"
              />

              <label htmlFor="img" className="product__label--file">
                <DriveFolderUploadOutlinedIcon className="product__icon" />
              </label>

              <input type="file" className="product__input--file" id="img" />
            </div>

            <button className="btn btn-warning">update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
