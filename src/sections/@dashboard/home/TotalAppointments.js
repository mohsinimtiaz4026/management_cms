// @mui
import {Card,CardHeader, Typography} from '@mui/material';
import {useTheme,styled} from '@mui/material/styles';

// ----------------------------------------------------------------------
const RowStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});
export default function TotalAppointments() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  return (
    <Card sx={{px: 3, py: 1}}>
      <CardHeader title="Total Appointments" sx={{mb: 3, pl: 0}} />

      <RowStyle
        sx={{
          height: '120px',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" sx={{color:  theme.palette.primary.main}}>
          0
        </Typography>
      </RowStyle>
  </Card>
  );
}
