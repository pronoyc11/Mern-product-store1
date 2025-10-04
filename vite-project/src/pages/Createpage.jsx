import { Container, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/products";

const Createpage = () => {
  const { createProduct } = useProductStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleSubmit = async () => {
    const obj = await createProduct(newProduct);
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
    console.log(obj);
  };

  return (
    <Container paddingTop={{ base: "150px", md: "130px" }}>
      <Fieldset.Root
        size="lg"
        maxW="md"
        margin={"auto"}
        textAlign={"center"}
        border={"1px"}
      >
        <Stack>
          <Fieldset.Legend>CREATE</Fieldset.Legend>
          <Fieldset.HelperText>
            Create product with required details below
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Product name</Field.Label>
            <Input
              name="name"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              value={newProduct.name}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Product price</Field.Label>
            <Input
              name="price"
              type="text"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              value={newProduct.price}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Image url</Field.Label>
            <Input
              name="image"
              type="url"
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              value={newProduct.image}
            />
          </Field.Root>
        </Fieldset.Content>
        <Spacer />
        <Button
          size={"sm"}
          type="submit"
          margin={"auto"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Fieldset.Root>
    </Container>
  );
};

export default Createpage;
