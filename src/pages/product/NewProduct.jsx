import "../../styles/page/product/new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addProduct } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const NewProduct = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  const handleClick = async (e) => {
    e.preventDefault();

    //1- prepare product object
    const newProduct = {
      ...inputs,
    };

    if (!newProduct.status) {
      newProduct.status = "active";
    }

    if (file) {
      // 2- upload file

      const storage = getStorage(app);
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, `${Date.now()} ${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      setLoading(true);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // 3- add url to product obj
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            newProduct.img = downloadURL;
            addProduct(dispatch, newProduct);
            setLoading(false);
            console.log(newProduct);
            navigate("/products");
          });
        }
      );
    }

    // navigate("product");
  };
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>

            <div className="newProduct__form-item">
              <label htmlFor="categories" className="newProduct__form-label">
                Categories
              </label>
              <input
                type="text"
                name="categories"
                placeholder="cat1,cat2..."
                className="newProduct__form-input"
                id="categories"
                onChange={handleChange}
              />
            </div>

            <div className="newProduct__form-item">
              <label htmlFor="sizes" className="newProduct__form-label">
                sizes
              </label>
              <input
                type="text"
                name="sizes"
                placeholder="xs,s,m,..."
                className="newProduct__form-input"
                id="sizes"
                onChange={handleChange}
              />
            </div>

            <div className="newProduct__form-item">
              <label htmlFor="colors" className="newProduct__form-label">
                Colors
              </label>
              <input
                type="text"
                name="colors"
                placeholder="red,#fff,..."
                className="newProduct__form-input"
                id="colors"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="newProduct__form-imgContainer">
            {/* <img
              src="https://via.placeholder.com/100"
              alt="image"
              className="newProduct__form-img"
            /> */}

            <label
              htmlFor="newProductImg"
              className="newProduct__form-label--img"
            >
              <DriveFolderUploadOutlinedIcon className="newProduct__form-icon" />

              <span>{file ? file.name : "upload product image"}</span>
            </label>

            <input
              type="file"
              name="newProductImg"
              id="newProductImg"
              className="newProduct__form-input--file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="newProduct__radio">
            <span className="newProduct__radioHeading">inStock:</span>

            <input
              type="radio"
              name="inStock"
              value={true}
              className="newProduct__radioInput"
              id="yes"
              onChange={handleChange}
            />
            <label htmlFor="yes" className="newProduct__radioLabel">
              yes
            </label>

            <input
              type="radio"
              name="inStock"
              value={false}
              className="newProduct__radioInput"
              id="no"
              onChange={handleChange}
            />
            <label htmlFor="no" className="newProduct__radioLabel">
              no
            </label>
          </div>

          <div className="newProduct__selectContainer">
            <span className="newProduct__select-heading">Status:</span>

            <select
              className="newProduct__select"
              name="status"
              onChange={handleChange}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>

          <div
            style={{
              alignSelf: "flex-end",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {loading && (
              <span style={{ fontSize: "1.6rem" }}>creating product ...</span>
            )}
            <button
              className="btn btn-warning"
              style={{ alignSelf: "flex-end", width: "15rem" }}
              onClick={handleClick}
            >
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
