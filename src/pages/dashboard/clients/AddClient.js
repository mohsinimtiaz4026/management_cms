// @mui
import {
  Container,
  Grid,
  Card,
  CardHeader,
  Button,
  CardContent,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
// hooks
import useSettings from "../../../hooks/useSettings";
// layouts
import Layout from "../../../layouts";
// components
import Page from "../../../components/Page";
import Iconify from "../../../components/Iconify";
// third-party packages
import { useFileUpload } from "use-file-upload";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// @utils
import { FORM_ELEMENT_TYPES } from "@/utils/contants";
// redux
import { getFormFields } from "@/redux/slices/forms";
import { useSelector } from "react-redux";
// router
import {useRouter} from "next/router";
// ----------------------------------------------------------------------

PageAddClient.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageAddClient() {
  const { themeStretch } = useSettings();
  const enableFields = useSelector(getFormFields);
  const [file, selectFile] = useFileUpload();
  const router = useRouter();
  const InputFieldRender = [
    {
      id: "fullname",
      label: "Full Name",
      placeholder: "Full Name",
      type: "text",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "numeric",
    },
    {
      id: "email",
      label: "Email Address (Optional)",
      placeholder: "Email Address (Optional)",
      type: "email",
    },
    {
      defaultValue: "",
      label: "Gender (Optional)",
      placeholder: "Gender (Optional)",
      type: "select",
      options: [
        {
          value: "male",
          name: "Male",
        },
        {
          value: "female",
          name: "Female",
        },
        {
          value: "other",
          name: "Other",
        },
      ],
    },
    {
      id: "martialStatus",
      label: "Martial Status (Optional)",
      placeholder: "Martial Status (Optional)",
      defaultValue: "",
      type: "select",
      options: [
        {
          value: "single",
          name: "Single",
        },
        {
          value: "married",
          name: "Married",
        },
        {
          value: "widowed",
          name: "Widowed",
        },
        {
          value: "divorced",
          name: "Divorced",
        },
        {
          value: "engaged",
          name: "Engaged",
        },
      ],
    },
    {
      id: "date",
      type: "date",
    },
    {
      id: "bloodGroup",
      label: "Blood Group (Optional)",
      placeholder: "Blood Group (Optional)",
      defaultValue: "",
      type: "select",
      options: [
        {
          value: "A-",
          name: "A-",
        },
        {
          value: "A+",
          name: "A+",
        },
        {
          value: "B-",
          name: "B-",
        },
        {
          value: "B+",
          name: "B+",
        },
        {
          value: "O-",
          name: "O-",
        },
        {
          value: "O+",
          name: "O+",
        },
        {
          value: "AB-",
          name: "AB-",
        },
        {
          value: "AB+",
          name: "AB+",
        },
      ],
    },
    {
      id: "cnic",
      label: "CNIC (Optional)",
      placeholder: "CNIC (Optional)",
      type: "numeric",
    },
    {
      id: "religion",
      label: "Religion (Optional)",
      placeholder: "Religion (Optional)",
      type: "text",
    },
    {
      id: "profession",
      label: "Profession (Optional)",
      placeholder: "Profession (Optional)",
      type: "text",
    },
    {
      id: "file",
      type: "file",
    },
  ];
  return (
    <Page title="Add Client">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 3, py: 1, mx: "auto" }}>
              <CardHeader
                title="Add Client"
                action={<Button variant="text" onClick={() => router.push('/dashboard/clients/FormDesign')}>Customize Form</Button>}
              />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                    gap: 2,
                  }}
                >
                  {InputFieldRender.map((item, index) => {
                    if (item.type === FORM_ELEMENT_TYPES.text.value) {
                      console.log(item.id);
                      return (
                        <TextField
                          key={index}
                          id={item.id}
                          placeholder={item.placeholder}
                          inputMode={item.type}
                          sx={{
                            display:
                              enableFields.register[item.id] == true
                                ? "grid"
                                : "none",
                          }}
                        />
                      );
                    } else if (item.type === FORM_ELEMENT_TYPES.numeric.value) {
                      return (
                        <TextField
                          key={index}
                          id={item.id}
                          placeholder={item.placeholder}
                          inputMode={item.type}
                          sx={{
                            display:
                              enableFields.register[item.id] == true
                                ? "grid"
                                : "none",
                          }}
                        />
                      );
                    } else if (item.type === FORM_ELEMENT_TYPES.email.value) {
                      return (
                        <TextField
                          key={index}
                          id={item.id}
                          placeholder={item.placeholder}
                          inputMode={item.type}
                          sx={{
                            display:
                              enableFields.register[item.id] == true
                                ? "grid"
                                : "none",
                          }}
                        />
                      );
                    } else if (item.type === FORM_ELEMENT_TYPES.select.value) {
                      return (
                        <TextField
                          key={index}
                          id={item.id}
                          label={item.label}
                          select
                          defaultValue=""
                          sx={{
                            display:
                              enableFields.register[item.id] == true
                                ? "grid"
                                : "none",
                          }}
                        >
                          {item.options.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                      );
                    } else if (item.type === FORM_ELEMENT_TYPES.date.value) {
                      return (
                        <div
                          style={{
                            display:
                              enableFields.register[item.id] == true
                                ? "grid"
                                : "none",
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                          </LocalizationProvider>
                        </div>
                      );
                    } else if (item.type === FORM_ELEMENT_TYPES.file.value) {
                      return file ? (
                        <Box>
                          <img
                            key={index}
                            src={file.source}
                            alt="preview"
                            width="100%"
                            height="300"
                          />
                        </Box>
                      ) : (
                        <div
                          style={{
                            display:
                              enableFields.register[item.id] == true
                                ? "grid"
                                : "none",
                          }}
                        >
                          <Box>No file Selected</Box>
                          <Button onClick={() => selectFile()}>
                            Upload File
                          </Button>
                        </div>
                      );
                    }
                  })}
                </Box>
                <Grid
                  sx={{
                    mt: 2,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Iconify icon="mdi:tick-circle" />}
                  >
                    Add Client
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={
                      <Iconify icon="material-symbols:cancel-outline" />
                    }
                    color="error"
                  >
                    Close
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
