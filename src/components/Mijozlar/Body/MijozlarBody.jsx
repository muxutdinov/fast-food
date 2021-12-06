import React, { useState, useContext} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ActionWrapper, Container, Editbtn } from "./MijozlarBodyStyle";
import { DeleteOutline } from "@material-ui/icons";
import { MijozlarContext } from "../MijozlarContext";


const MijozlarBody = () => {
  const [data, setData] = useContext(MijozlarContext);

  const OnDelete = (id) => {
    setData(data.filter((value) => value.id !== id));
  };
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
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <ActionWrapper>
              {/* <Editbtn>Edit</Editbtn> */}
              <div className="delete" onClick={() => OnDelete(params.row.id)}>
                <DeleteOutline />
              </div>
            </ActionWrapper>
          </>
        );
      },
    },
  ];

  return (
    <Container style={{ height: "695px", width: "100%" }}>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
      />
    </Container>
  );
};

export default MijozlarBody;
