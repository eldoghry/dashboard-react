import "../../styles/page/product/new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <div className="newProduct__wrapper box">
        <h2 className="box__title">Create Product</h2>

        <form className="newProduct__form">
          <div className="newProduct__form-top">
            <div className="newProduct__form-item">
              <label htmlFor="title" className="newProduct__form-label">
                title
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                className="newProduct__form-input"
                id="title"
              />
            </div>

            <div className="newProduct__form-item">
              <label htmlFor="username" className="newProduct__form-label">
                price
              </label>
              <input
                type="number"
                name="price"
                min={0}
                placeholder="price"
                className="newProduct__form-input"
                id="price"
              />
            </div>

            <div className="newProduct__form-item--textarea">
              <label htmlFor="lastname" className="newProduct__form-label">
                desc
              </label>
              <textarea
                type="text"
                name="desc"
                placeholder="desc"
                className="newProduct__form-input--textarea"
                id="desc"
              />
            </div>

            <div className="newProduct__form-item">
              <label htmlFor="password" className="newProduct__form-label">
                Category
              </label>
              <select className="newProduct__form-input--select">
                <option value="cat 1">cat 1</option>
                <option value="cat 2">cat 2</option>
                <option value="cat 3">cat 3</option>
              </select>
            </div>
          </div>

          <div className="newProduct__form-imgContainer">
            <img
              src="https://via.placeholder.com/100"
              alt="image"
              className="newProduct__form-img"
            />

            <label
              htmlFor="newProductImg"
              className="newProduct__form-label--img"
            >
              <DriveFolderUploadOutlinedIcon className="newProduct__form-icon" />
            </label>

            <input
              type="file"
              name="newProductImg"
              id="newProductImg"
              className="newProduct__form-input--file"
            />
          </div>

          <div className="newProduct__radio">
            <span className="newProduct__radioHeading">inStock:</span>

            <input
              type="radio"
              name="gender"
              value="yes"
              className="newProduct__radioInput"
              id="password"
            />
            <label htmlFor="yes" className="newProduct__radioLabel">
              yes
            </label>

            <input
              type="radio"
              name="gender"
              value="no"
              className="newProduct__radioInput"
              id="password"
            />
            <label htmlFor="no" className="newProduct__radioLabel">
              no
            </label>
          </div>

          <div className="newProduct__selectContainer">
            <span className="newProduct__select-heading">Status:</span>

            <select className="newProduct__select" name="status">
              <option value="active">active</option>
              <option value="disabled">disabled</option>
            </select>
          </div>

          <button
            className="btn btn-warning"
            style={{ alignSelf: "flex-end", width: "15rem" }}
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
