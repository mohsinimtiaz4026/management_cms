// @mui
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  ButtonGroup,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { DataGrid,GridToolbar} from "@mui/x-data-grid";
// hooks
import useSettings from "../../../hooks/useSettings";
// layouts
import Layout from "../../../layouts";
// components
import Page from "../../../components/Page";
import Iconify from "../../../components/Iconify";
// img
import Image from "next/image";
// router
import { useRouter } from "next/router";
// ----------------------------------------------------------------------

PageClientList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function PageClientList() {
  const { themeStretch } = useSettings();
  const router = useRouter();
  const columns = [
    {
      field: "profile",
      headerName: "Profile",
      width: 90,
      renderCell: () => {
        return <Image src="/logo/logo.png" width={48} height={48} />;
      },
    },
    {
      field: "id",
      headerName: "ID",
      width: 90,
      hideable: false,
    },
    {
      field: "fullname",
      headerName: "Full Name",
      width: 150,
      hideable: false,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
      hideable: false,
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 240,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
    },
    {
      field: "martialstatus",
      headerName: "Martial Status",
      width: 150,
    },
    {
      field: "dob",
      headerName: "DOB",
      width: 150,
      valueFormater: (props) => {
        const valueFormatted = moment(new Date(props.row.date)).format(
          "DD MMM YYYY"
        );
        return `${valueFormatted}`;
      },
    },
    {
      field: "bloodgroup",
      headerName: "Blood Group",
      width: 120,
    },
    {
      field: "cnic",
      headerName: "CNIC",
      width: 160,
    },
    {
      field: "religion",
      headerName: "Religion",
      width: 120,
    },
    {
      field: "profession",
      headerName: "Profession",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      renderCell: () => {
        return (
          <ButtonGroup>
            <Tooltip title="Upload File" arrow>
              <IconButton>
                <Iconify icon="material-symbols:upload-rounded" />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Profile" arrow>
              <IconButton>
                <Iconify icon="ic:outline-remove-red-eye" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Information" arrow>
              <IconButton>
                <Iconify icon="material-symbols:edit-outline" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Remove Profile" arrow>
              <IconButton>
                <Iconify icon="ic:round-delete-outline" />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      fullname: "Raj Chaudhary",
      phone: "03211251997",
      email: "imtiazmohsin56@gmail.com",
      gender: "Male",
      martialstatus: "Single",
      dob: "03 Jun 2001",
      bloodgroup: "AB-",
      cnic: "35201-8620995-9",
      religion: "Sunni",
      profession: "Software Engineer",
    },
    {
      id: 2,
      fullname: "Anas Khan",
      phone: "03237900263",
      email: "khansaab0331@gmail.com",
      gender: "Male",
      martialstatus: "Single",
      dob: "13 May 2000",
      bloodgroup: "B-",
      cnic: "35201-8620995-9",
      religion: "Sunni",
      profession: "Software Engineer",
    },
    {
      id: 3,
      fullname: "Fawad Ahmad",
      phone: "03258695785",
      email: "fawad4027@gmail.com",
      gender: "Male",
      martialstatus: "Single",
      dob: "03 Sep 1999",
      bloodgroup: "AB+",
      cnic: "35201-8620995-9",
      religion: "Sunni",
      profession: "Software Engineer",
    },
    {
      id: 4,
      fullname: "Usman Ameer",
      phone: "03202659892",
      email: "usman1039@gmail.com",
      gender: "Male",
      martialstatus: "Single",
      dob: "03 Oct 1998",
      bloodgroup: "B+",
      cnic: "35201-8620995-9",
      religion: "Sunni",
      profession: "Software Engineer",
    },
    {
      id: 5,
      fullname: "Hamza Irfan",
      phone: "03248542571",
      email: "hamzairfan21@gmail.com",
      gender: "Male",
      martialstatus: "Single",
      dob: "03 May 2000",
      bloodgroup: "A-",
      cnic: "35201-8620995-9",
      religion: "Sunni",
      profession: "Software Engineer",
    },
    {
      id: 6,
      fullname: "Hasnat Imtiaz",
      phone: "03265426552",
      email: "hasnat78601@gmail.com",
      gender: "Male",
      martialstatus: "Single",
      dob: "01 Feb 2007",
      bloodgroup: "B+",
      cnic: "35201-8620995-9",
      religion: "Sunni",
      profession: "Student",
    },
  ];
  return (
    <Page title="Client List">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 3, py: 1, mx: "auto" }}>
              <CardHeader
                title="Client List"
                action={
                  <Button
                    variant="text"
                    onClick={() => router.push("/dashboard/clients/AddClient")}
                  >
                    Add Client
                  </Button>
                }
              />
              <CardContent>
                {/* <Grid
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <ButtonGroup>
                    <Button
                      variant="outlined"
                      startIcon={<Iconify icon="bi:file-earmark-excel" />}
                    >
                      Export to Excel
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Iconify icon="bi:file-earmark-pdf" />}
                    >
                      Export to PDF
                    </Button>
                  </ButtonGroup>
                </Grid> */}
                <Box
                  sx={{
                    width: "100%",
                    height: 500,
                  }}
                >
                  <DataGrid
                    slots={{
                      toolbar: GridToolbar,
                    }}
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
                    disableRowSelectionOnClick
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
