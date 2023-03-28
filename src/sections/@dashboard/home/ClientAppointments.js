// @mui
import { Card, CardHeader, Button, TextField, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@mui styles
import { styled, useTheme } from "@mui/material/styles";
// react
import { useState } from "react";
// ----------------------------------------------------------------------

const RowStyle = styled("div")({
  width: "100%",
  height: "400",
});
const ClientAppoinments = () => {
  const theme = useTheme();
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Raj Chaudhary",
      email: "imtiazmohsin56@gmail.com",
      gender: "Male",
      phone: "923104292898",
      date: "28 Mar 2023",
      status: "",
    },
    {
      id: 2,
      name: "Anas Khan",
      email: "khansaab0331@gmail.com",
      gender: "Male",
      phone: "923237900263",
      date: "28 Mar 2023",
      status: "",
    },
    {
      id: 3,
      name: "Fawad Ahmad",
      email: "fawad@gmail.com",
      gender: "Male",
      phone: "923024347640",
      date: "28 Mar 2023",
      status: "",
    },
    {
      id: 4,
      name: "Hasnat Imtiaz",
      email: "hasnat@gmail.com",
      gender: "Male",
      phone: "9232658428253",
      date: "28 Mar 2023",
      status: "",
    },
    {
      id: 5,
      name: "John Alan",
      email: "john@gmail.com",
      gender: "Male",
      phone: "1569559959",
      date: "28 March 20234",
      status: "",
    },
    {
      id: 6,
      name: "Elizabeth",
      email: "imtiazmohsin56@gmail.com",
      gender: "Female",
      phone: "6426595292",
      date: "28 March 20234",
      status: "",
    },
  ]);
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Full Name" },
    { field: "email", headerName: "Email Address" },
    { field: "gender", headerName: "Gender" },
    { field: "Phone", headerName: "Phone Number" },
    {
      field: "date",
      headerName: "Date",
      valueFormater: (props) => {
        const valueFormatted = moment(new Date(props.row.date)).format(
          "DD MMM YYYY"
        );
        return `${valueFormatted}`;
      },
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: () => {
        return (
          <>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue=""
              helperText="Status"
            >
              <MenuItem value={"active"}>
                Active
              </MenuItem>
              <MenuItem value={"pending"}>
                Pending
              </MenuItem>
              <MenuItem value={"disactive"}>
                Disactive
              </MenuItem>
            </TextField>
          </>
        );
      },
    },
  ]);
  return (
    <Card sx={{ px: 3, py: 1, mt: 5 }}>
      <CardHeader
        title="Client Appoinments"
        sx={{ mb: 3, pl: 0 }}
        action={<Button variant="text">Full Report</Button>}
      />

      <RowStyle>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </RowStyle>
    </Card>
  );
};

export default ClientAppoinments;
