import React, { useState, useContext} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ActionWrapper, Container, Editbtn } from "./HodimlarBodyStyle";
import { DeleteOutline } from "@material-ui/icons";
import { HodimlarContext } from "../HodimlarContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const HodimlarBody = () => {
  const [data, setData] = useContext(HodimlarContext);

  const OnDelete = (id) => {
    setData(data.filter((value) => value.id !== id));
    toast.success("Hodim muvaffaqiyatli o'chirildi!")
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "ism", headerName: "ISM", width: 200 },
    { field: "familya", headerName: "FAMILYA", width: 200 },
    {
      field: "lavozim",
      headerName: "LAVOZIM",
      width: 100,
    },
    {
      field:'raqam',
      headerName:'TELEFON RAQAM',
      width:300
    },
    {
      field: "action",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <ActionWrapper>
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
      <ToastContainer/>
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

export default HodimlarBody;
