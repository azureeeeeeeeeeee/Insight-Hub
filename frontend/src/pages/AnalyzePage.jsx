import { Select, Text, Button, Heading, Box } from "@chakra-ui/react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import ScatterChart from "../components/ScatterChart";
import DescriptiveStats from "../components/DescriptiveStats";
import { useState, useEffect } from "react";
import getAllData from "../services/data/getAllData";
import getData from "../services/data/getData";

const AnalyzePage = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchAllData = async () => {
      const fetchedData = await getAllData();
      setAllData(fetchedData);
      if (fetchedData) {
        setId(fetchedData[0].id);
      }
    };

    fetchAllData();
  }, []);

  const handleDataSubmit = async () => {
    setData(JSON.parse(await getData(id)));
  };

  return (
    <>
      <Heading className="mt-6">Data Analytics</Heading>
      <Box p={{ base: 3, sm: 5, md: 7, lg: 9 }} className="text-left">
        <Box>
          <Text>Select the data you want to analyze</Text>
          <Box className="flex gap-4">
            <Select
              variant="outline"
              width="24rem"
              onChange={(e) => setId(e.target.value)}
            >
              {allData.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.filename}
                </option>
              ))}
            </Select>
            <Button colorScheme="blue" onClick={handleDataSubmit}>
              Analyze
            </Button>
          </Box>
        </Box>

        {data ? (
          <>
            <LineChart datasets={data} />
            <BarChart datasets={data} />
            <DoughnutChart datasets={data} />
            <ScatterChart datasets={data} />
            <DescriptiveStats datasets={data} />
          </>
        ) : (
          <div>Select data first</div>
        )}
      </Box>
    </>
  );
};

export default AnalyzePage;
