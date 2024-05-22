import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: "$299", image: "/images/smartwatch.jpg" },
];

const ProductList = () => {
  return (
    <Box py={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} align="start">
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;