// @mui
import { Card, CardHeader, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@mui styles
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------
const columns = [
  { field: "id", headerName: "ID"},
  { field: "name", headerName: "Full Name",width: 170},
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
  { id: 1, name: "Raj Chaudhary",date: "28 Mar 2023" },
  { id: 2, name: "Anas Khan", date: "28 Mar 2023" },
  { id: 3, name: "Fawad Ahmad",date: "28 Mar 2023" },
  { id: 4, name: "Hasnat Imtiaz", date: "28 Mar 2023" },
  { id: 5, name: "John Alan",date: "28 Mar 2023" },
  { id: 6, name: "Elizabeth",date: "28 Mar 2023" },
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
