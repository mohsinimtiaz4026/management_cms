import { forwardRef, useState } from "react";
// @mui
import {
  Box,
  Select,
  MenuItem,
  Button,
  Dialog,
  Slide,
  DialogContent,
  DialogActions,
  DialogTitle,
  OutlinedInput,
  TextField,
} from "@mui/material";
// @mui styles
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function ServiceForm() {
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
        // width: 250,
      },
    },
  };
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
      <Select
        MenuProps={MenuProps}
        defaultValue=""
        onChange=""
        label="Service"
        input={<OutlinedInput label="Service" />}
      >
        <MenuItem value="" onClick={handleClickOpen}>
          Add Service
        </MenuItem>
        <MenuItem value="fluffy">Fluffy</MenuItem>
        <MenuItem value="pet_mommy">Pet Mommy</MenuItem>
      </Select>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add Service</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1, m: 1, width: "25ch" }}>
            <TextField label="Name" />
            <TextField label="Amount" sx={{ mt: 2 }} />
            <TextField label="Discription (Optional)" sx={{ mt: 2 }} />
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
      <Button variant="contained">Add Service</Button>
    </Box>
  );
}
