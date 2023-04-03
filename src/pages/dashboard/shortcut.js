// @mui
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
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

  window.addEventListener('keydown',(e) => {
    if(e.altKey && e.which == 97){
      alert('pressed alt');
    }
  });

  return (
    <Page title="Shortcuts">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 3, py: 1, mx: "auto" }}>
              <CardHeader title="Shortcut Keys" />
              <CardContent>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Sr.#</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Key Combination</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          01
                        </TableCell>
                        <TableCell>Create Appointments</TableCell>
                        <TableCell>Alt+A</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          02
                        </TableCell>
                        <TableCell>Create Bill/Invoice</TableCell>
                        <TableCell>Alt+B</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          03
                        </TableCell>
                        <TableCell>Add Client</TableCell>
                        <TableCell>Alt+C</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
