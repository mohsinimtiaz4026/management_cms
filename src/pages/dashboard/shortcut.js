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

PageShortcut.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageShortcut() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Shortcuts">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography>Shortcuts</Typography>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
