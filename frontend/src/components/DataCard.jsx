import { Text, Button, Box } from "@chakra-ui/react";

const DataCard = ({ data }) => {
  return (
    <Box className="flex justify-between items-center">
      <Text className="text-xl">
        <strong>{data.filename}</strong>
      </Text>
      <Button size={"xs"} className="text-base" colorScheme="red">
        Delete
      </Button>
    </Box>
  );
};

export default DataCard;
