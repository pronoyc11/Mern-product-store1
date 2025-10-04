import React from "react";
import { Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Container
      fluid
      padding={"20px"}
      paddingRight={"40px"}
      paddingLeft={"40px"}
      margin={"auto"}
      position={"fixed"}
      top={"0"}
      zIndex={"1000"}
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Link to={"/"}>
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight={"semibold"}
            textAlign={{ base: "center" }}
          >
            OUR STORE
          </Text>
        </Link>
        <Stack direction={{ base: "column", md: "row" }}>
          <Button size={"sm"}>
            <Link to={"/create"}> Create products</Link>
          </Button>

          <Button onClick={toggleColorMode} size={"sm"}>
            Toggle theme
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Navbar;
