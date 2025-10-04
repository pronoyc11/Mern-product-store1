import {
  Container,
  Heading,
  SimpleGrid,
  Spacer,
  VStack,
  Text
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useProductStore } from "../store/products";
import ProductCard from "../components_app/ProductCard";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return products.length === 0 ? (
    <Container
      paddingBottom={"40px"}
      paddingTop={{ base: "150px", md: "130px" }}
    >
      <Heading
        fontWeight={"light"}
        size={"3xl"}
        color={"red.400"}
        textShadow={"md"}
        textAlign={"center"}
      >
        No products available
      </Heading>{" "}
      <Text textAlign={"center"} textDecoration={"underline"}>

      <Link to={"/create"}> Create products</Link>
      </Text>
    </Container>
  ) : (
    <Container
      paddingBottom={"40px"}
      paddingTop={{ base: "150px", md: "130px" }}
    >
      <VStack>
        <Spacer />
        <Heading size={"3xl"}>Products available now</Heading>
        <Spacer />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"40px"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Homepage;
