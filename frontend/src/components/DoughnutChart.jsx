import { Box, Heading, Text, Center, Select, Button } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import getDoughnutData from "../services/chart/doughnutData";

const DoughnutChart = ({ datasets }) => {
  const [cols, setCols] = useState([]);
  const [col, setCol] = useState("");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setCols(Object.keys(datasets[0]));
  }, [datasets]);

  const handleGetData = async (e) => {
    e.preventDefault();

    const res = await getDoughnutData({ data: datasets, column: col });
    const parsedData = JSON.parse(res);
    const labels = parsedData.map((item) => item[col]);
    const data = parsedData.map((item) => item.count);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: `Count of ${col}`,
          data: data,
        },
      ],
    });
  };

  return (
    <Box className="text-center mt-4">
      <Heading size="lg" className="mb-4">
        Dougnut Chart
      </Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Text>Count of value in </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setCol(e.target.value)}
          >
            {cols.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </Select>
          <Button colorScheme="blue" onClick={handleGetData}>
            Show
          </Button>
        </Box>
      </Center>
      {chartData && <Doughnut data={chartData} />}
      {/* <Doughnut
        data={{
          labels: ["RED", "BLUE", "YELLOW"],
          datasets: [
            {
              label: "Votes",
              data: [13, 12, 11],
            },
          ],
        }}
      /> */}
    </Box>
  );
};

export default DoughnutChart;
