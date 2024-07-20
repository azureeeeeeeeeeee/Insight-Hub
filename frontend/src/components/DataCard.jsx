import { Text, Button, Box } from "@chakra-ui/react";
import deleteData from "../services/data/deleteData";

const DataCard = ({ data }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteData(data.id);
    window.location.reload();
  };
  return (
    <Box className="flex justify-between items-center">
      <Text className="text-xl">
        <strong>{data.filename}</strong>
      </Text>
      <Button
        onClick={handleDelete}
        size={"xs"}
        className="text-base"
        colorScheme="red"
      >
        Delete
      </Button>
    </Box>
  );
};

export default DataCard;
