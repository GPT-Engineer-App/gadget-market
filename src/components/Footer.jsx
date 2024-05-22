import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} mt={10}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</Text>
        <Flex>
          <Link href="#" px={2}>
            Facebook
          </Link>
          <Link href="#" px={2}>
            Twitter
          </Link>
          <Link href="#" px={2}>
            Instagram
          </Link>
        </Flex>
        <Flex>
          <Link href="#" px={2}>
            Contact Us
          </Link>
          <Link href="#" px={2}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;