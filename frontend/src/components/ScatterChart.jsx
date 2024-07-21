import { Box, Heading, Center, Select, Text, Button } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";
import { useState, useEffect } from "react";
import getScatterData from "../services/chart/scatterData";

const ScatterChart = ({ datasets }) => {
  const [allCols, setAllCols] = useState([]);

  const [col1, setCol1] = useState("");
  const [col2, setCol2] = useState("");

  const [chartData, setChartData] = useState(null);

  const handleGetData = async (e) => {
    e.preventDefault();

    const res = await getScatterData({
      data: datasets,
      col1,
      col2,
    });
    const parsedData = JSON.parse(res);

    const dataArray = Object.keys(parsedData[col1]).map((index) => ({
      [col1]: parsedData[col1][index],
      [col2]: parsedData[col2][index],
    }));

    setChartData({
      datasets: [
        {
          label: `${col1} vs ${col2}`,
          data: dataArray.map((item) => ({ x: item[col1], y: item[col2] })),
        },
      ],
    });
  };

  useEffect(() => {
    setAllCols(Object.keys(datasets[0]));
  }, [datasets]);

  return (
    <Box className="text-center mt-4" height="350px">
      <Heading size="lg">Scatter Plot</Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Text>Correlation of </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setCol1(e.target.value)}
          >
            {allCols.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </Select>
          <Text>and </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setCol2(e.target.value)}
          >
            {allCols.map((col) => (
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
      {chartData && (
        <Scatter
          className="mx-auto"
          data={chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: col1,
                },
              },
              y: {
                title: {
                  display: true,
                  text: col2,
                },
              },
            },
          }}
          height={1000}
          width={800}
        />
      )}
    </Box>
  );
};

export default ScatterChart;
