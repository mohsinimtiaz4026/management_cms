// @mui
import { Container, Grid, Typography } from "@mui/material";
// hooks
import useSettings from "../../../hooks/useSettings";
// layouts
import Layout from "../../../layouts";
// components
import Page from "../../../components/Page";
// sections

// ----------------------------------------------------------------------

PageClientList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageClientList() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Client List">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
           <Typography>Client List</Typography>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
