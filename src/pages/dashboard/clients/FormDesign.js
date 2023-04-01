// @mui
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  Typography,
  Box,
  FormControl,
  FormControlLabel,
} from "@mui/material";
// hooks
import useSettings from "../../../hooks/useSettings";
// layouts
import Layout from "../../../layouts";
// components
import Page from "../../../components/Page";
// sections

// ----------------------------------------------------------------------

PageFormDesign.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageFormDesign() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Form Design">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 3, py: 1, mx: "auto" }}>
              <Box sx={{ py: 1, px: 3 }}>
                <Typography variant="h6">
                  Please Check (&#x2713;) All The Fields Which You Want To
                  Use/See In Your Client Form.
                </Typography>
                <Typography variant="body2">
                  These are the fields you will use to collect your Patient
                  information according to your need.
                </Typography>
              </Box>
              <CardHeader title="Client Registration" />
              <CardContent>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                    gap: 2,
                  }}
                >
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          defaultValue={"fullname"}
                          disabled
                        />
                      }
                      label="Full Name (Mandatory)"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          defaultValue={"phone"}
                          disabled
                        />
                      }
                      label="Phone Number (Mandatory)"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"email"} />}
                      label="Email Address"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"gender"} />}
                      label="Gender"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"martialstatus"} />}
                      label="Martial Status"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"dob"} />}
                      label="Date Of Birth"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"bloodgroup"} />}
                      label="Blood Group"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"cnic"} />}
                      label="CNIC"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"religion"} />}
                      label="Religion"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox defaultValue={"profession"} />}
                      label="Profession"
                    />
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
