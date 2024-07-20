import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import login from "../services/login";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
      toast.success("Login Sucessful");
      setLoggedIn(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      borderRadius="l"
      className="flex flex-col gap-4 w-96 mx-auto my-6 pt-20"
    >
      <Heading as="h2" size="3xl">
        Insight Hub
      </Heading>
      <form onSubmit={handleLogin} method="POST" className="mt-6">
        <Input
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputGroup className="my-4" size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder={show ? "Enter Password" : "********"}
            onChange={(e) => setPassword(e.target.value)}
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
