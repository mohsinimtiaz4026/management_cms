import { useState, forwardRef } from "react";
// @mui
import {
  Container,
  Grid,
  Card,
  Button,
  CardContent,
  Dialog,
  Box,
  Slide,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
// hooks
import useSettings from "../../hooks/useSettings";
// layouts
import Layout from "../../layouts";
// components
import Page from "../../components/Page";
import Iconify from "../../components/Iconify";
// @mui-x
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from "@mui/x-data-grid";
// sections
import {
  ServiceForm,
  ServiceTable,
  ServiceCal,
} from "../../sections/@dashboard/invoice";
// ----------------------------------------------------------------------

PageInvoices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function PageInvoices() {
  const { themeStretch } = useSettings();
  const [value, setValue] = useState(dayjs(""));
  const [open, setOpen] = useState(false);
  const [onRecordSelect, setRecordSelect] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const UpdateRecord = () => {
    setRecordSelect(true);
  };
  const columns = [
    {
      field: "name",
      headerName: "Full Name",
      width: 160,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      name: "action",
      headerName: "Action",
      renderCell: () => {
        return (
          <Button
            endIcon={
              <Iconify icon="material-symbols:arrow-circle-right-outline-rounded" />
            }
            onClick={() => UpdateRecord()}
          >
            Select
          </Button>
        );
      },
    },
  ];
  const rows = [
    { id: 1, name: "Anas Khan", phone: "03237900263" },
    { id: 2, name: "Raj Chaudhary", phone: "03237900263" },
    { id: 3, name: "Fawad Ahmad", phone: "03237900263" },
    { id: 4, name: "Hasnat Imtiaz", phone: "03237900263" },
    { id: 5, name: "Usman Ameer", phone: "03237900263" },
    { id: 6, name: "Ali Raza", phone: "03237900263" },
  ];
  return (
    <Page title="Invoice">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 3, py: 1, mx: "auto" }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {onRecordSelect ? (
                  <Grid>
                    <Typography>
                      Name: Mohsin Imtiaz{" "}
                      <Button variant="text" onClick={handleClickOpen}>
                        Change
                      </Button>
                    </Typography>
                    <Typography>Phone: 03211251997</Typography>
                  </Grid>
                ) : (
                  <Button
                    variant="text"
                    startIcon={
                      <Iconify icon="material-symbols:person-add-outline-rounded" />
                    }
                    onClick={handleClickOpen}
                  >
                    Select Client
                  </Button>
                )}
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>Select Client</DialogTitle>
                  <DialogContent sx={{ py: 2 }}>
                    <Box
                      sx={{
                        width: "100%",
                        height: 400,
                      }}
                    >
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 5,
                            },
                          },
                        }}
                        pageSizeOptions={[5]}
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
              <CardContent>
                <ServiceForm />
                <ServiceTable />
                <ServiceCal />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
