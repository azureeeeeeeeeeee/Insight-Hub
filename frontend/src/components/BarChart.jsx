import { Box, Heading, Text, Center, Select, Button } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import getBarData from "../services/chart/barData";

const BarChart = ({ datasets }) => {
  const [allCols, setAllCols] = useState([]);
  const [baseCol, setBaseCol] = useState("");
  const [groupCol, setGroupCol] = useState("");
  const [value, setValue] = useState("mean");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setAllCols(Object.keys(datasets[0]));
  }, [datasets]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getBarData({
      data: datasets,
      group_col: groupCol,
      base_col: baseCol,
      value: value,
    });
    const parsedData = JSON.parse(res);
    const labels = Object.values(parsedData[groupCol]);
    const dataValues = Object.values(parsedData[value]);
    setChartData({
      labels,
      datasets: [
        {
          label: `${value} of ${baseCol} grouped by ${groupCol}`,
          data: dataValues,
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <Box className="text-center mt-4">
      <Heading size="lg" className="mb-6">
        Bar Plot
      </Heading>
      <Center>
        <Box className="flex items-center gap-4">
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="mean">Mean</option>
            <option value="count">Count</option>
          </Select>
          <Text>Value of </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setBaseCol(e.target.value)}
          >
            {allCols.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </Select>
          <Text>Group by </Text>
          <Select
            variant="outline"
            width="10rem"
            onChange={(e) => setGroupCol(e.target.value)}
          >
            {allCols.map((col) => (
              <option key={col} value={col}>
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
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Bar Chart",
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default BarChart;
