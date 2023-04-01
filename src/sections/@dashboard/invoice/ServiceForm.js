import { forwardRef, useState } from "react";
// @mui
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Dialog,
  Slide,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
// @mui styles
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function ServiceForm() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))",
        gap: 2,
      }}
    >
      <TextField select label="Service" defaultValue="">
        <MenuItem value="" onClick={handleClickOpen}>
          Add Service
        </MenuItem>
      </TextField>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add Service</DialogTitle>
        <DialogContent>
          <Box sx={{ pt:1,m: 1,width: '25ch'}}>
            <TextField label="Name" />
            <TextField label="Amount" sx={{mt:2}}/>
            <TextField label="Discription (Optional)" sx={{mt:2}} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Save</Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <TextField label="Description" />
      <TextField label="Quanitty" inputMode="numeric" />
      <TextField label="Charges" inputMode="numeric" />
      <TextField label="Discount" inputMode="numeric" />
      <Button
        variant="contained">
        Add Service
      </Button>
    </Box>
  );
}
