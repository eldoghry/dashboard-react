import "../styles/components/table.scss";
import { DataGrid } from "@mui/x-data-grid";

import { useState } from "react";
import {
  createUserTableColumns,
  createProductTableColumns,
} from "./tableColumns";

const Table = ({ type, rows }) => {
  const [pageSize, setPageSize] = useState(5);
  const [filteredData, setFilteredData] = useState(rows);

  const handleDelete = (e, id) => {
    setFilteredData(filteredData.filter((row) => row.id !== id));
  };

  let columns;

  switch (type) {
    case "users":
      columns = createUserTableColumns(handleDelete);
      break;

    case "products":
      columns = createProductTableColumns(handleDelete);
      break;

    default:
      columns = [];
  }

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
