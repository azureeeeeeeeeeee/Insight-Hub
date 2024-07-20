import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logout from "../services/auth/logout";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-16 py-4">
        <div className="flex-none">
          <h1>
            <Link to={"/"}>
              <Avatar name="logo" src="LOGO.png" />
            </Link>
          </h1>
        </div>
        <div className="flex-none">
          <Menu>
            <MenuButton>
              <Avatar name="username" src="https://bit.ly/dan-abramov" />
            </MenuButton>
            <MenuList>
              <Link to="/profile">
                <MenuItem>
                  <FaRegUser className="mr-4" />
                  Settings
                </MenuItem>
              </Link>
              <Link>
                <MenuItem onClick={logout}>
                  <FaSignOutAlt className="mr-4" />
                  Logout
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
