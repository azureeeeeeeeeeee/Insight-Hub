import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);
  return (
    <Box borderRadius="l" className="flex flex-col gap-4 w-96 mx-auto my-6">
      <Heading as="h2" size="3xl">
        Insight Hub
      </Heading>
      <form action="" method="POST" className="mt-6">
        <Input placeholder="Enter Username" />
        <InputGroup className="my-4" size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder={show ? "Enter Password" : "********"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text>
          Do not have an account ?
          <Link to="/register" className="text-sky-500">
            register here
          </Link>
        </Text>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
