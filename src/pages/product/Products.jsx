import { Link } from "react-router-dom";
import Table from "../../components/Table";
import "../../styles/page/product/products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="container box">
        <div className="Products__titleContainer">
          <h2 className="box__title">Products</h2>

          <div style={{ display: "flex", gap: "2rem" }}>
            <Link to="/user/new" className="link">
              <button className="btn btn-primary">create</button>
            </Link>
            {/* <button className="btn btn-danger">delete</button> */}
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Products;
