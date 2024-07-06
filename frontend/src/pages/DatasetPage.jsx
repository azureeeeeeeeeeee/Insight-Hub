import { Heading, Text, Box, Button, Input } from "@chakra-ui/react";

const DatasetPage = () => {
  return (
    <>
      <Heading>Datasets</Heading>
      <Box className="flex flex-col gap-4 w-96 mx-auto mt-6">
        {/* Each data */}
        <Box className="flex justify-between items-center">
          <Text className="text-xl">
            <strong>data1.csv</strong> - 1 day ago
          </Text>
          <Button size={"xs"} className="text-base" colorScheme="red">
            Delete
          </Button>
        </Box>

        <Box className="flex justify-between items-center">
          <Text className="text-xl">
            <strong>data2.csv</strong> - 2 day ago
          </Text>
          <Button size={"xs"} className="text-base" colorScheme="red">
            Delete
          </Button>
        </Box>

        <Box className="flex justify-between items-center">
          <Text className="text-xl">
            <strong>data3.csv</strong> - 3 day ago
          </Text>
          <Button size={"xs"} className="text-base" colorScheme="red">
            Delete
          </Button>
        </Box>

        <Box className="flex justify-between items-center">
          <Text className="text-xl">
            <strong>data4.csv</strong> - 4 day ago
          </Text>
          <Button size={"xs"} className="text-base" colorScheme="red">
            Delete
          </Button>
        </Box>
      </Box>

      <form method="POST" className="w-96 mx-auto mt-16">
        <Heading size="base">Add new Data</Heading>
        <Input className="my-4" type="file" />
        <Button type="submit" colorScheme="blue">
          Add data
        </Button>
      </form>
    </>
  );
};

export default DatasetPage;
