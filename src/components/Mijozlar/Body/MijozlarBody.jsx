import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ActionWrapper, Container, Editbtn } from "./MijozlarBodyStyle";
import { DeleteOutline } from "@material-ui/icons";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 270,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
        <ActionWrapper>
          <Editbtn>Edit</Editbtn>
          <div className="delete">
            <DeleteOutline/>
          </div>
        </ActionWrapper>
        </>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 19 },
  { id: 6, lastName: "Melisandre", firstName: "Find", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 11, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 12, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 13, lastName: "Stark", firstName: "Arya", age: 16 },
];

const MijozlarBody = () => {
  return (
    <Container style={{ height: "695px", width: "100%" }}>
      <DataGrid
      disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
      />
    </Container>
  );
};

export default MijozlarBody;
