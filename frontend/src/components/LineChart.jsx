import { Box, Heading } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <Box className="text-center mt-4" height="300px">
      <Heading size="lg" className="mx-auto">
        Line Chart
      </Heading>
      <Line
        className="mx-auto"
        data={{
          labels: ["Jan", "Apr", "Mar", "May", "Jun", "Jul", "Aug"],
          datasets: [
            {
              label: "Bitcoin",
              data: [13, 12, 11, 9, 10, 17, 13, 22],
            },
            {
              label: "ETH",
              data: [20, 13, 12, 9, 11, 9, 10, 13],
            },
          ],
        }}
      />
    </Box>
  );
};

export default LineChart;
