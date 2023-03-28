// @mui
import { Container, Grid, Typography } from "@mui/material";
// hooks
import useSettings from "../../hooks/useSettings";
// layouts
import Layout from "../../layouts";
// components
import Page from "../../components/Page";
// sections
// ----------------------------------------------------------------------

PageInvoices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageInvoices() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Invoice">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography>Invoice</Typography>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
