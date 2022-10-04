import "../styles/components/table.scss";
import { DataGrid } from "@mui/x-data-grid";

import { useState } from "react";
import {
  createUserTableColumns,
  createProductTableColumns,
} from "./tableColumns";
import { userRequester } from "../apiRequester";
import { useSelector } from "react-redux";

const Table = ({ type, rows, handleDelete }) => {
  const [pageSize, setPageSize] = useState(5);
  // const [filteredData, setFilteredData] = useState(rows);
  const state = useSelector((state) => state);

  // const handleDelete = async (_, id) => {
  //   try {
  //     await userRequester.delete(`/${type}/${id}`);
  //     setFilteredData(filteredData.filter((row) => row._id !== id));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  let columns;

  switch (type) {
    case "user":
      columns = createUserTableColumns(handleDelete);
      break;

    case "product":
      columns = createProductTableColumns(handleDelete);
      break;

    default:
      columns = [];
  }

  return (
    <div className="Table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Table;
