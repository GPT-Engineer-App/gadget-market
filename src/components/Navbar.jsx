import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleSearch = () => {
    // Implement the search logic here
    console.log("Searching for:", search);
  };

  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          E-Shop
        </Text>
        <InputGroup maxW="400px" mx={4}>
          <Input
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            bg="white"
            color="black"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" px={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" px={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" px={2}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;