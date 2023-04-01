// @mui
import { Grid, Box, Typography,TextField,MenuItem,Button } from "@mui/material";
// @mui styles
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function ServiceCal() {
  const theme = useTheme();
  return (
    <Grid sx={{
        mt: 2,
    }}>
      <Box
        sx={{
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
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>Discount Type:</Typography>
        <TextField  
        defaultValue="value" 
        select
        sx={{ml:1,width:'25ch'}}
        >
            <MenuItem value="value" selected>Value</MenuItem>
            <MenuItem value="percentage">Percentage</MenuItem>
        </TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>Total:</Typography>
        <Typography sx={{ pl: 2 }} variant="h6">
          790
        </Typography>
      </Box>
      <Button variant="contained" sx={{mt:1}}>Create Bill/Invoice</Button>
    </Grid>
  );
}
