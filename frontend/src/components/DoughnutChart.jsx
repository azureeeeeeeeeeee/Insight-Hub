import { Box, Heading } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  return (
    <Box className="text-center mt-4">
      <Heading size="lg">Dougnut Chart</Heading>
      <Doughnut
        data={{
          labels: ["RED", "BLUE", "YELLOW"],
          datasets: [
            {
              label: "Votes",
              data: [13, 12, 11],
            },
          ],
        }}
      />
    </Box>
  );
};

export default DoughnutChart;
