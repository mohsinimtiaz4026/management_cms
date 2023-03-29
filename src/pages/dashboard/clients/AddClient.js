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
  Stack,
  MenuItem,
  FormControl,
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
import { useForm } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// ----------------------------------------------------------------------

PageAddClient.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageAddClient() {
  const { themeStretch } = useSettings();
  const [file, selectFile] = useFileUpload();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Page title="Add Client">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 3, py: 1, mx: "auto" }}>
              <CardHeader
                title="Add Client"
                action={<Button variant="text">Customize Form</Button>}
              />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    display: "grid",
                    // gridTemplateColumns: { sm: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  <FormControl variant="standard">
                    <TextField
                      id="outlined-gender"
                      placeholder="Full Name"
                      {...register("fullname", { required: true })}
                    />
                    <TextField
                      id="outlGendername"
                      placeholder="Phone Number"
                      inputMode="numeric"
                      {...register("number", { required: true })}
                      sx={{mt:2}}
                    />
                    <TextField
                      id="outlined-email"
                      placeholder="Email Address (Optional)"
                      inputMode="email"
                      {...register("email")}
                      sx={{mt:2}}
                    />
                    <TextField
                      id="outlined-gender"
                      label="Gender (Optional)"
                      defaultValue={""}
                      {...register("gender")}
                      select
                      sx={{mt:2}}
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                      <MenuItem value={"other"}>Other</MenuItem>
                    </TextField>
                    <TextField
                      id="outlined-martial-status"
                      label="Martial Status (Optional)"
                      {...register("martialstatus")}
                      defaultValue={""}
                      select
                      sx={{mt:2,mb:2}}
                    >
                      <MenuItem value={"single"}>Single</MenuItem>
                      <MenuItem value={"married"}>Married</MenuItem>
                      <MenuItem value={"widowed"}>Widowed</MenuItem>
                      <MenuItem value={"divorced"}>Divorced</MenuItem>
                      <MenuItem value={"engaged"}>Engaged</MenuItem>
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker />
                    </LocalizationProvider>
                    <TextField
                      id="outlined-blood-group"
                      label="Blood Group (Optional)"
                      defaultValue={""}
                      {...register("bloodgroup")}
                      select
                      sx={{mt:2}}
                    >
                      <MenuItem value={"A-"}>A-</MenuItem>
                      <MenuItem value={"A+"}>A+</MenuItem>
                      <MenuItem value={"B-"}>B-</MenuItem>
                      <MenuItem value={"B+"}>B+</MenuItem>
                      <MenuItem value={"O-"}>O-</MenuItem>
                      <MenuItem value={"O+"}>O+</MenuItem>
                      <MenuItem value={"AB-"}>AB-</MenuItem>
                      <MenuItem value={"AB+"}>AB+</MenuItem>
                    </TextField>
                    <TextField
                      id="outlined-cnic"
                      placeholder="CNIC (Optional)"
                      inputMode="number"
                      {...register("cnic")}
                      sx={{mt:2}}
                    />
                    <TextField
                      id="outlined-religion"
                      placeholder="Religion (Optional)"
                      {...register("religion")}
                      sx={{mt:2}}
                    />
                    <TextField
                      id="outlined-profession"
                      placeholder="Profession (Optional)"
                      inputMode="text"
                      {...register("profession")}
                      sx={{mt:2}}
                    />
                    {file ? (
                      <Box sx={{ my: 2 }}>
                        <img
                          src={file.source}
                          alt="preview"
                          width="100%"
                          height="300"
                          style={{
                            backgroundSize: "cover",
                          }}
                        />
                      </Box>
                    ) : (
                      <Box sx={{mt:2}}>No file selected</Box>
                    )}
                    <Button onClick={() => selectFile()}>Upload File</Button>
                    <Button
                      variant="contained"
                      startIcon={<Iconify icon="mdi:tick-circle" />}
                      type="submit"
                      sx={{mt:2}}
                      onClick={() => {}}
                    >
                      Add Client
                    </Button>
                  </FormControl>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
