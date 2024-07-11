import { Box, Heading, Select, Button, Center, Text } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <Box className="text-center mt-4" height="300px">
      <Heading size="lg" className="mx-auto mb-6">
        Line Chart
      </Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Text>Value of </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Text>with Respects to </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Button colorScheme="blue">Show</Button>
        </Box>
      </Center>
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
