import { Box, Heading, Center, Select, Text, Button } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";

const ScatterChart = () => {
  return (
    <Box className="text-center mt-4" height="350px">
      <Heading size="lg">Scatter Plot</Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Text>Correlation of </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Text>and </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Button colorScheme="blue">Show</Button>
        </Box>
      </Center>
      <Scatter
        className="mx-auto"
        data={{
          datasets: [
            {
              label: "Spending and income",
              data: [
                { x: 1, y: 1 },
                { x: 2, y: 4 },
                { x: 3, y: 9 },
                { x: 4, y: 16 },
                { x: 5, y: 25 },
                { x: 6, y: 36 },
                { x: 7, y: 49 },
                { x: 8, y: 64 },
                { x: 9, y: 81 },
                { x: 10, y: 100 },
              ],
            },
          ],
        }}
      />
    </Box>
  );
};

export default ScatterChart;
