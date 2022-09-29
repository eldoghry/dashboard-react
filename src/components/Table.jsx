import "../styles/components/table.scss";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { tableRows } from "../dummyDate";
import { useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [pageSize, setPageSize] = useState(5);
  const [filteredData, setFilteredData] = useState(tableRows);

  const handleDelete = (e, id) => {
    setFilteredData(filteredData.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "User",
      width: 200,

      renderCell: (params) => {
        // console.log(params);
        return (
          <>
            <img
              className="table__avatar"
              src={params.row.img}
              alt={params.row.name}
            />
            <span>{params.row.name}</span>
          </>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      // type: "boolean",
      // editable: true,
      width: 90,
    },
    {
      field: "transaction",
      headerName: "transaction",
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
            <Link to={`/user/${params.row.id}`} className="link">
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
              onClick={(e) => handleDelete(e, params.row.id)}
            >
              <DeleteIcon />
            </span>
          </>
        );
      },
    },
  ];

  return (
    <div className="Table">
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
};

export default Table;
