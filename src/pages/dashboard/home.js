// @mui
import {Container, Grid} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import {
  TotalClients,  
  Invoices,
  NewClientList,
} from '../../sections/@dashboard/home';
// ----------------------------------------------------------------------

PageHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageHome() {
  const {themeStretch} = useSettings();

  return (
    <Page title="Home">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TotalClients></TotalClients>
          </Grid>
          <Grid item xs={12} md={6}>
            <Invoices></Invoices>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <NewClientList />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
