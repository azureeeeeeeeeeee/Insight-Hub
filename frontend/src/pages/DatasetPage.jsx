import { Heading, Text, Box, Button, Input } from "@chakra-ui/react";
import addData from "../services/addData";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import getAllData from "../services/getAllData";

import DataCard from "../components/DataCard";

const DatasetPage = () => {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAllData(await getAllData());
    };

    fetchData();
  }, []);

  const handleAddBook = async (e) => {
    e.preventDefault();

    const dataForm = new FormData();
    dataForm.append("data", data);

    try {
      await addData(dataForm);
      toast.success("Data Added");

      // Refresh dataset once the new data is uploaded
      setAllData(await getAllData());
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <Heading>Datasets</Heading>
      <Text>
        Datasets count : <strong>{allData.length}</strong>
      </Text>
      <Box className="flex flex-col gap-4 w-96 mx-auto mt-6">
        {/* Each data */}
        {allData.map((data) => (
          <DataCard key={data.id} data={data} />
        ))}
      </Box>

      <form
        onSubmit={handleAddBook}
        method="POST"
        className="w-96 mx-auto mt-16"
      >
        <Heading size="base">Add new Data</Heading>
        <Input
          className="my-4"
          type="file"
          accept=".csv, .xlsx"
          onChange={(e) => setData(e.target.files[0])}
        />
        <Button type="submit" colorScheme="blue">
          Add data
        </Button>
      </form>
    </>
  );
};

export default DatasetPage;
