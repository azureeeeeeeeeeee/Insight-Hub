import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { FaDatabase, FaTachometerAlt, FaBook, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <Menu className="relative top-2 left-2">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MdMenu />}
        variant="outline"
      />
      <MenuList>
        <Link to="/">
          <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
        </Link>
        <Link to="/datasets">
          <MenuItem icon={<FaDatabase />}>Datasets</MenuItem>
        </Link>
        <Link to="/analyze">
          <MenuItem icon={<FaSearch />}>Analyze</MenuItem>
        </Link>
        <Link>
          <MenuItem icon={<FaBook />}>Report</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
