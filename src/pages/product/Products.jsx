import { Link } from "react-router-dom";
import Table from "../../components/Table";
import "../../styles/page/product/products.scss";
import { productRows } from "../../dummyDate";

const Products = () => {
  return (
    <div className="products">
      <div className="container box">
        <div className="products__titleContainer">
          <h2 className="box__title">Products</h2>

          <div style={{ display: "flex", gap: "2rem" }}>
            <Link to="/product/new" className="link">
              <button className="btn btn-primary">create</button>
            </Link>
            {/* <button className="btn btn-danger">delete</button> */}
          </div>
        </div>

        <Table type="products" rows={productRows} />
      </div>
    </div>
  );
};

export default Products;
