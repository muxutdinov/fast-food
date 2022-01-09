import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ActionWrapper, Container } from "./MijozlarBodyStyle";
import { DeleteOutline } from "@material-ui/icons";
import { MijozlarContext } from "../MijozlarContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MijozlarBody = () => {
  const [data, setData] = useContext(MijozlarContext);

  const OnDelete = (id) => {
    setData(data.filter((value) => value.id !== id));
    toast.success("Mijoz muvaffaqiyatli o'chirildi!")
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "MIJOZ ISMI", width: 170 },
    { field: "tel", headerName: "TELEFON RAQAM", width: 200 },
    {
      field: "soni",
      headerName: "BUYURTMALAR SONI",
      type: "number",
      width: 240,
    },
    {
      field: "status",
      headerName: " STATUS",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
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

export default MijozlarBody;