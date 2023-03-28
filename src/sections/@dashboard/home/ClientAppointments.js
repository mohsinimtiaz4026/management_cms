// @mui
import {
  Card,
  CardHeader,
  Button,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@mui styles
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------
const rows = [
  {
    id: 1,
    name: "Raj Chaudhary",
    email: "imtiazmohsin56@gmail.com",
    gender: "Male",
    date: "28 Mar 2023",
    status: "",
  },
  {
    id: 2,
    name: "Anas Khan",
    email: "khansaab0331@gmail.com",
    gender: "Male",
    date: "28 Mar 2023",
    status: "",
  },
  {
    id: 3,
    name: "Fawad Ahmad",
    email: "fawad@gmail.com",
    gender: "Male",
    date: "28 Mar 2023",
    status: "",
  },
  {
    id: 4,
    name: "Hasnat Imtiaz",
    email: "hasnat@gmail.com",
    gender: "Male",
    date: "28 Mar 2023",
    status: "",
  },
  {
    id: 5,
    name: "John Alan",
    email: "john@gmail.com",
    gender: "Male",
    date: "28 Mar 2023",
    status: "",
  },
  {
    id: 6,
    name: "Elizabeth",
    email: "imtiazmohsin56@gmail.com",
    gender: "Female",
    date: "28 Mar 2023",
    status: "",
  },
];
const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Full Name", width: 170 },
  { field: "email", headerName: "Email Address", width: 220 },
  { field: "gender", headerName: "Gender" },
  {
    field: "date",
    width: 170,
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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {mt:3, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue=""
              helperText="Status"
            >
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"disactive"}>Disactive</MenuItem>
            </TextField>
          </Box>
        </>
      );
    },
  },
];
const ClientAppoinments = () => {
  const theme = useTheme();
  return (
    <Card sx={{ px: 3, py: 1, mt: 5 }}>
      <CardHeader
        title="Client Appoinments"
        sx={{ mb: 3, pl: 0 }}
        action={<Button variant="text">Full Report</Button>}
      />

      <Box sx={{ width: "100%", height: 450 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Card>
  );
};

export default ClientAppoinments;
