// @mui
import { Card, CardHeader, Button } from "@mui/material";
// @mui styles
import { styled, useTheme } from "@mui/material/styles";
//
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
// ----------------------------------------------------------------------

const RowStyle = styled("div")({
  width: "100%",
  height: "auto",
});
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
const ClientGrowthChart = () => {
  const theme = useTheme();
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const data = {
    datasets: [
      {
        label: "Clients Ratio",
        data: {
            x: ["5","6","7"],
            y: ["10","4","9"],
            z: ["5","6","7"]
        },
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Card sx={{ px: 3, py: 1, mt: 5 }}>
      <CardHeader
        title="Clients Growth"
        sx={{ mb: 3, pl: 0 }}
        action={<Button variant="text">Full Report</Button>}
      />

      <RowStyle>
        <Bubble options={options} data={data} />
      </RowStyle>
    </Card>
  );
};

export default ClientGrowthChart;
