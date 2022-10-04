import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "timeago.js";
//SETUP DATAGRID TABLE COLUMNS SHAPE

export const createUserTableColumns = (handleDelete) => [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "username",
    headerName: "User",
    width: 200,

    renderCell: (params) => {
      // console.log(params);
      return (
        <>
          <img
            className="table__avatar"
            src={
              params.row.img ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt={params.row.username}
          />
          <span>{params.row.username}</span>
        </>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "createdAt",
    headerName: "Join Date",
    width: 200,
    renderCell: (params) => {
      return <span>{format(params.row.createdAt)}</span>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
    // editable: true,
    width: 90,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    width: 160,
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 160,
    sortable: false,
    renderCell: (params) => {
      // console.log(params);
      return (
        <>
          <Link to={`/user/${params.row._id}`} className="link">
            <span
              className="btn btn-success"
              style={{ marginRight: "2rem" }}
              onClick={() => {}}
            >
              edit
            </span>
          </Link>

          <span
            className="btn btn-danger"
            onClick={(e) => handleDelete(e, params.row._id)}
          >
            <DeleteIcon />
          </span>
        </>
      );
    },
  },
];

export const createProductTableColumns = (handleDelete) => [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "title",
    headerName: "Product",
    width: 200,

    renderCell: (params) => {
      // console.log(params);
      return (
        <>
          <img
            className="table__avatar"
            src={
              params.row.img ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt={params.row.title}
          />
          <span>{params.row.title}</span>
        </>
      );
    },
  },

  {
    field: "instock",
    headerName: "stock",
    type: "boolean",
    width: 90,
  },

  {
    field: "status",
    headerName: "status",
    type: "boolean",
    width: 90,
  },

  {
    field: "price",
    headerName: "price",
    width: 160,
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 160,
    sortable: false,
    renderCell: (params) => {
      // console.log(params);
      return (
        <>
          <Link to={`/product/${params.row._id}`} className="link">
            <span
              className="btn btn-success"
              style={{ marginRight: "2rem" }}
              onClick={() => {}}
            >
              edit
            </span>
          </Link>

          <span
            className="btn btn-danger"
            onClick={(e) => handleDelete(e, params.row._id)}
          >
            <DeleteIcon />
          </span>
        </>
      );
    },
  },
];
