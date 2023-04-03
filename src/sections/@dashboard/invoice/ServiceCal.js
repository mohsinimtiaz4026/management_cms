// @mui
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
// @mui styles
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function ServiceCal() {
  const theme = useTheme();
  return (
    <Box>
      <Grid
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "end",
          justifyContent: "flex-start",
          flexDirection: "column",
          textAlign: "left"
        }}
      >
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Gross Total:</Typography>
          <Typography sx={{ pl: 2 }} variant="h6">
            840
          </Typography>
        </Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Service Discount:</Typography>
          <Typography sx={{ pl: 2 }} variant="h6">
            40
          </Typography>
        </Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Sub Total:</Typography>
          <Typography sx={{ pl: 2 }} variant="h6">
            790
          </Typography>
        </Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Total:</Typography>
          <Typography sx={{ pl: 2 }} variant="h6">
            790
          </Typography>
        </Box>
      </Grid>
      <Box sx={{textAlign: 'center',my:1}}>
        <Button variant="contained" sx={{ mt: 1 }}>
          Create Bill/Invoice
        </Button>
      </Box>
    </Box>
  );
}
