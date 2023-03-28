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
  TotalAppointments, 
  Invoices,
  NewClientList,
  ClientGrowthChart,
  ClientAppoinments,
} from '../../sections/@dashboard/home';
// ----------------------------------------------------------------------

PageHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageHome() {
  const {themeStretch} = useSettings();

  console.log();
  return (
    <Page title="Home">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TotalClients></TotalClients>
          </Grid>
          <Grid item xs={12} md={5}>
            <TotalAppointments></TotalAppointments>
          </Grid>
          <Grid item xs={12} md={4}>
            <Invoices></Invoices>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <NewClientList></NewClientList>
          </Grid>
          <Grid item xs={12} md={6}>
            <ClientGrowthChart></ClientGrowthChart>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <ClientAppoinments></ClientAppoinments>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
