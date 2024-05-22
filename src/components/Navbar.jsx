import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          E-Shop
        </Text>
        <Spacer />
        <Flex align="center">
          <InputGroup maxW="400px" mx={4}>
            <Input placeholder="Search products..." />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                onClick={() => console.log("Search clicked")}
              />
            </InputRightElement>
          </InputGroup>
          <Link as={RouterLink} to="/" px={2} mx={1}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" px={2} mx={1}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" px={2} mx={1}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" px={2} mx={1}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;