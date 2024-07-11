import { Select, Text, Button, Heading, Box, Center } from "@chakra-ui/react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import ScatterChart from "../components/ScatterChart";
import DescriptiveStats from "../components/DescriptiveStats";

const AnalyzePage = () => {
  return (
    <>
      <Heading className="mt-6">Data Analytics</Heading>
      <Box p={{ base: 3, sm: 5, md: 7, lg: 9 }} className="text-left">
        <Box>
          <Text>Select the data you want to analyze</Text>
          <Box className="flex gap-4">
            <Select variant="outline" width="24rem">
              <option value="">data1.csv</option>
              <option value="">data2.csv</option>
              <option value="">data3.csv</option>
            </Select>
            <Button colorScheme="blue">Analyze</Button>
          </Box>
        </Box>

        <LineChart />

        <Box className="flex justify-around mt-14">
          <BarChart />

          <DoughnutChart />
        </Box>

        <ScatterChart />

        <DescriptiveStats />
      </Box>
    </>
  );
};

export default AnalyzePage;
