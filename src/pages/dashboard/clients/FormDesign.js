import { useState } from "react";
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
// redux
import {setFormFields, getFormFields} from '@/redux/slices/forms'
import { useSelector,useDispatch } from "react-redux";
// ----------------------------------------------------------------------

PageFormDesign.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageFormDesign() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch()
  const {register: registerFormFields} = useSelector(getFormFields)
  
  console.log(registerFormFields);
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
                          defaultChecked = {registerFormFields.fullname == true ? true : false}
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
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.email == true ? true : false}
                          defaultValue={"email"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                email: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Email Address"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.gender == true ? true : false}
                          defaultValue={"gender"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                gender: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Gender"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.martialStatus == true ? true : false}
                          defaultValue={"martialstatus"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                martialStatus: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Martial Status"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.dateOfBirth == true ? true : false}
                          defaultValue={"dob"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                dateOfBirth: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Date Of Birth"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.bloodGroup == true ? true : false}
                          defaultValue={"bloodgroup"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                bloodGroup: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Blood Group"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.cnic == true ? true : false}
                          defaultValue={"cnic"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                cnic: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="CNIC"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.religion == true ? true : false}
                          defaultValue={"religion"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                religion: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Religion"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                        defaultChecked = {registerFormFields.profession == true ? true : false}
                          defaultValue={"profession"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                profession: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="Profession"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultValue={"file"}
                          onChange={(event) => {
                            dispatch(
                              setFormFields({ref:'register', fields:{
                                ...registerFormFields,
                                file: event.target.checked
                              }})
                            )
                          }}
                        />
                      }
                      label="file"
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
