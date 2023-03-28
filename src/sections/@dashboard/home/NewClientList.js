// @mui
import { Card, CardHeader, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@mui styles
import { styled, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const RowStyle = styled("div")({
  width: "100%",
  height: "400",
});
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full Name", width: 130 },
  { field: "Phone", headerName: "Phone Number", width: 130 },
  {
    field: "date",
    headerName: "Date",
    width: 90,
  },
];

const rows = [
  { id: 1, name: "Raj Chaudhary", phone: "923104292898", date: "28 Mar 2023" },
  { id: 2, name: "Anas Khan", phone: "923237900263", date: "28 Mar 2023" },
  { id: 3, name: "Fawad Ahmad", phone: "923024347640", date: "28 Mar 2023" },
  { id: 4, name: "Hasnat Imtiaz", phone: "9232658428253", date: "28 Mar 2023" },
  { id: 5, name: "John Alan",phone: "1569559959",date: "28 March 20234" },
  { id: 6, name: "Elizabeth",phone: "6426595292",date: "28 March 20234" },
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

      <RowStyle>
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={4}
          rowsPerPageOptions={[5]}
        />
      </RowStyle>
    </Card>
  );
};

export default NewClientList;
