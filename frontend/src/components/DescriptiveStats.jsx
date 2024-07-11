import { Box, Text, Heading, Center, Button, Select } from "@chakra-ui/react";

const DescriptiveStats = () => {
  return (
    <Box className="mt-14" height="350px">
      <Heading className="mx-auto" size="lg">
        <Center>Descriptive Statiscics</Center>
      </Heading>
      <Box className="flex flex-col justify-center align-center">
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
          <Heading size="base">Descriptive Statistics of "column 1"</Heading>
          <Text>Median : 30</Text>
          <Text>Mean : 30</Text>
          <Text>Standard Deviation : 30</Text>
          <Text>Mode : 30</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptiveStats;
