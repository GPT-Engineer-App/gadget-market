import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bg="gray.100" py={20} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to E-Shop
      </Heading>
      <Text fontSize="xl" mb={6}>
        Your one-stop shop for the latest electronics
      </Text>
      <Button colorScheme="teal" size="lg">
        Shop Now
      </Button>
    </Box>
  );
};

export default Hero;