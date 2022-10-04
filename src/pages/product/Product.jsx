import "../../styles/page/product/product.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  // CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/apiCalls";

const Product = () => {
  const data = [
    {
      month: "Sep",
      total: 985,
    },
    {
      month: "Oct",
      total: 4320,
    },
    {
      month: "Nov",
      total: 2290,
    },
  ];
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products).filter(
    (item) => item._id === id
  )[0];
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    let obj = {};

    if (["categories", "sizes", "colors"].includes(e.target.name)) {
      obj[e.target.name] = [...e.target.value.toLowerCase().trim().split(",")];
    } else {
      obj[e.target.name] = e.target.value.toLowerCase().trim();
    }

    setInputs((prev) => {
      return {
        ...prev,
        ...obj,
      };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (file) {
    } else {
      console.log(inputs);
      updateProduct(dispatch, id, inputs);
    }
  };

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
                  dataKey="total"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <XAxis dataKey="month" />
                {/* <YAxis /> */}
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            <span className="product__chartSpan">sales performance</span>
          </div>

          <div className="product__info">
            <div className="product__info-item">
              <span className="product__info-key">id:</span>
              <span className="product__info-value">{product._id}</span>
            </div>
            <div className="product__info-item">
              <span className="product__info-key">price:</span>
              <span className="product__info-value">{product.price}</span>
            </div>
            <div className="product__info-item">
              <span className="product__info-key">Status:</span>
              <span className="product__info-value">{product.status}</span>
            </div>
            <div className="product__info-item">
              <span className="product__info-key">in stock:</span>
              <span className="product__info-value">
                {product.inStock ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>

        <form className="product__form">
          <div className="product__formLeft">
            <div className="product__formItem">
              <label htmlFor="title" className="product__label">
                Product title
              </label>

              <input
                type="text"
                className="product__input"
                id="title"
                name="title"
                placeholder={product.title}
                onChange={handleChange}
              />
            </div>

            <div className="product__formItem">
              <label htmlFor="inStock" className="product__label">
                inStock
              </label>

              <select
                name="inStock"
                id="inStock"
                className="product__select"
                defaultValue={product.inStock}
                onChange={handleChange}
              >
                <option value={true}>yes</option>
                <option value={false}>no</option>
              </select>
            </div>

            <div className="product__formItem">
              <label htmlFor="active" className="product__label">
                active
              </label>

              <select
                name="status"
                id="status"
                className="product__select"
                defaultValue={product.status}
                onChange={handleChange}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
          </div>

          <div className="product__formRight">
            <div className="product__formItem--file">
              <img src={product.img} alt="" className="product__formImg" />

              <label htmlFor="img" className="product__label--file">
                <DriveFolderUploadOutlinedIcon className="product__icon" />
              </label>

              <input type="file" className="product__input--file" id="img" />
            </div>

            <button className="btn btn-warning" onClick={handleUpdate}>
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
