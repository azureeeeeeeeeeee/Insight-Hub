import { Box, Heading, Text, Center, Select, Button } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <Box className="text-center mt-4">
      <Heading size="lg" className="mb-6">
        Bar Plot
      </Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Select variant="outline" width="10rem">
            <option value="">Median</option>
            <option value="">Mean</option>
            <option value="">Count</option>
          </Select>
          <Text>Value of </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Text>Group by </Text>
          <Select variant="outline" width="10rem">
            <option value="">column 1</option>
            <option value="">column 2</option>
            <option value="">column 3</option>
          </Select>
          <Button colorScheme="blue">Show</Button>
        </Box>
      </Center>
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
