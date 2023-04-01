// @mui
import { Box,IconButton } from "@mui/material";
// @mui styles
import { useTheme } from "@mui/material/styles";
// @mui x
import { DataGrid } from "@mui/x-data-grid";
// @components
import Iconify from "../../../components/Iconify";
// ----------------------------------------------------------------------

export default function ServiceTable() {
  const theme = useTheme();
  const columns = [
    {
      field: "service",
      headerName: "Service",
      width: 160,
    },
    {
      field: "description",
      headerName: "Description",
      width: 160,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150
    },
    {
      field: "charges",
      headerName: "Charges",
      width: 150
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: () => {
        return (
          <IconButton>
            <Iconify icon="mdi:bin" />
          </IconButton>
        );
      },
    },
  ];
  const rows = [
    {
        id:1,
        service: "Fluffy",
        description: "N/A",
        quantity: "01",
        charges: "900",
        discount: "50"
    },
    {
        id:2,
        service: "Pet Mommy (16kg)",
        description: "N/A",
        quantity: "03",
        charges: "2750",
        discount: "500"
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: 250,
        mt:3
      }}
    >
      <DataGrid 
      rows={rows} 
      columns={columns}
      disableRowSelectionOnClick
      rowsPerPageOptions={[5]}
       />
    </Box>
  );
}
