import { Box, Heading } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <Box className="text-center mt-4">
      <Heading size="lg">Bar Plot</Heading>
      <Bar
        data={{
          labels: ["Tarakan", "Balikpapan", "Jakarta"],
          datasets: [
            {
              label: "Male",
              data: [100, 300, 400],
            },
            {
              label: "Female",
              data: [150, 190, 310],
            },
          ],
        }}
      />
    </Box>
  );
};

export default BarChart;
