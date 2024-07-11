import { Box, Heading, Text, Center, Select, Button } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  return (
    <Box className="text-center mt-4">
      <Heading size="lg" className="mb-4">
        Dougnut Chart
      </Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Text>Count of value in </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Button colorScheme="blue">Show</Button>
        </Box>
      </Center>
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
