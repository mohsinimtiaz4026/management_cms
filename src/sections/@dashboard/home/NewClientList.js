// @mui
import { Card, CardHeader, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@mui styles
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------
const columns = [
  { field: "id", headerName: "ID"},
  { field: "name", headerName: "Full Name",width: 170},
  { field: "phone", headerName: "Phone Number",width: 170},
  { field: "email", headerName: "Email Address",width: 220},
  {
    field: "date",
    headerName: "Date",
    width: 130,
    valueFormater: (props) => {
      const valueFormatted = moment(new Date(props.row.date)).format(
        "DD MMM YYYY"
      );
      return `${valueFormatted}`;
    },
  },
];

const rows = [
  { id: 1, name: "Raj Chaudhary",phone: "03211251997",email: "imtiazmohsin56@gmail.com",date: "28 Mar 2023" },
  { id: 2, name: "Anas Khan",phone: "03237900263",email: "khansaab0331@gmail.com", date: "28 Mar 2023" },
  { id: 3, name: "Fawad Ahmad",phone: "03265846595",email: "fawad1122@gmail.com",date: "28 Mar 2023" },
  { id: 4, name: "Hasnat Imtiaz",phone: "03259814267",email: "hasant8090@gmail.com", date: "28 Mar 2023" },
  { id: 5, name: "John Alan",phone: "03104292898",email: "john56@gmail.com",date: "28 Mar 2023" },
  { id: 6, name: "Elizabeth",phone: "03004146436",email: "elizabeth9023@gmail.com",date: "28 Mar 2023" },
];

const NewClientList = () => {
  const theme = useTheme();
  return (
    <Card sx={{ px: 3, py: 1, mt: 5 }}>
      <CardHeader
        title="New Client List"
        sx={{ mb: 3, pl: 0 }}
        action={<Button variant="text">Full Report</Button>}
      />

      <Box sx={{width: "100%",height: 400}}>
        <DataGrid
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[4]}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Card>
  );
};

export default NewClientList;
