import { Box, Heading, Select, Button, Center, Text } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import getLineData from "../services/chart/lineData";

const LineChart = ({ datasets }) => {
  const [allCols, setAllCols] = useState([]);
  const [col, setCol] = useState("");
  const [dateCol, setDateCol] = useState("");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setAllCols(Object.keys(datasets[0]));
  }, [datasets]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getLineData({ data: datasets, col, date: dateCol });
    const parsedData = JSON.parse(res);
    console.log(parsedData);
    const dataValues = Object.values(parsedData.Amount);
    const dateData = Object.values(parsedData.Date);

    const labels = dateData.map((timestamp) =>
      new Date(timestamp).toLocaleDateString()
    );

    setChartData({
      labels,
      datasets: [
        {
          label: `Line chart of ${col} over ${dateCol}`,
          data: dataValues,
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <Box className="text-center mt-4 mb-32" height="300px">
      <Heading size="lg" className="mx-auto mb-6">
        Line Chart
      </Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Text>Value of </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setCol(e.target.value)}
          >
            {allCols.map((col) => (
              <option value={col} key={col}>
                {col}
              </option>
            ))}
          </Select>
          <Text>with Respects to </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setDateCol(e.target.value)}
          >
            {allCols.map((col) => (
              <option value={col} key={col}>
                {col}
              </option>
            ))}
          </Select>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Show
          </Button>
        </Box>
      </Center>
      {chartData && (
        <Line
          className="mx-auto"
          data={chartData}
          options={{ responsive: true }}
        />
      )}
    </Box>
  );
};

export default LineChart;
