import { Box, Text, Heading, Center, Button, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import getDescriptiveStatistics from "../services/chart/descriptiveStats";

const DescriptiveStats = ({ datasets }) => {
  const [col, setCol] = useState("");
  const [allCols, setAllCols] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    setAllCols(Object.keys(datasets[0]));
  }, [datasets]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getDescriptiveStatistics({ data: datasets, col: col });
    const parsedData = JSON.parse(res);
    setData(parsedData);
  };

  return (
    <Box className="mt-20 mx-auto" height="350px">
      <Heading className="mx-auto" size="lg">
        <Center>Descriptive Statiscics</Center>
      </Heading>
      <Box className="flex flex-col justify-center align-center">
        <Text>Select the column</Text>
        <Box className="flex gap-4">
          <Select
            variant="outline"
            width="16rem"
            onChange={(e) => setCol(e.target.value)}
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

        <Box className="mt-6">
          {data && (
            <>
              <Heading size="base">
                Descriptive Statistics of <strong>{col}</strong>
              </Heading>
              <Text>Mean : {data.mean}</Text>
              <Text>Standard Deviation : {data.std}</Text>
              <br />
              <Text>25% : {data["25%"]}</Text>
              <Text>50% : {data["50%"]}</Text>
              <Text>75% : {data["75%"]}</Text>
              <br />
              <Text>Count : {data.count}</Text>
              <Text>Min : {data.min}</Text>
              <Text>Max : {data.max}</Text>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptiveStats;
