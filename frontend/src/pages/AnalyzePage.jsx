import { Select, Text, Button, Heading, Box, Center } from "@chakra-ui/react";

import { Chart } from "chart.js/auto";
import { Bar, Line, Doughnut, Scatter } from "react-chartjs-2";

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

        <Box className="text-center mt-4" height="350px">
          <Heading size="lg" className="mx-auto">
            Line Chart
          </Heading>
          <Line
            id="line-chart-1"
            key="line-chart-1"
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

        <Box className="flex justify-around mt-14">
          <Box className="text-center mt-4">
            <Heading size="lg">Bar Plot</Heading>
            <Bar
              id="bar-chart-1"
              key="bar-chart-1"
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
            <Heading size="lg">Dougnut Chart</Heading>
            <Doughnut
              id="doughnut-chart-1"
              key="doughnut-chart-1"
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
        </Box>

        <Box className="text-center mt-4" height="350px">
          <Heading size="lg">Line Chart</Heading>
          <Scatter
            id="scatter-chart-1"
            key="scatter-chart-1"
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

        <Box className="mt-14" height="350px">
          <Heading className="mx-auto" size="lg">
            <Center>Descriptive Statiscics</Center>
          </Heading>
          <Box className="ml-6">
            <Text>Select the column</Text>
            <Box className="flex gap-4">
              <Select variant="outline" width="16rem">
                <option value="">column 1</option>
                <option value="">column 2</option>
                <option value="">column 3</option>
              </Select>
              <Button colorScheme="blue">Show</Button>
            </Box>

            <Box className="mt-6">
              <Heading size="base">
                Descriptive Statistics of "column 1"
              </Heading>
              <Text>Median : 30</Text>
              <Text>Mean : 30</Text>
              <Text>Standard Deviation : 30</Text>
              <Text>Mode : 30</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AnalyzePage;
