import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box position="relative">
        <Box position="absolute" top="5" left="5">
          <HamburgerMenu />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default MainLayout;
