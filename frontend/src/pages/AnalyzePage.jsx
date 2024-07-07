import { Select, Text, Button, Heading, Box } from "@chakra-ui/react";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

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

        <Box className="text-center mt-4">
          <Heading size="lg">Line Plot</Heading>
          <Line
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
      </Box>
    </>
  );
};

export default AnalyzePage;
