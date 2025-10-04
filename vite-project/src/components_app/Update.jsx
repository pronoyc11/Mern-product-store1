import { useState } from "react";
import { useProductStore } from "../store/products";
import { CloseButton, Portal, Input, HStack, Dialog, Button, Text } from "@chakra-ui/react";


const Update = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });
  const { updateProduct } = useProductStore();
  const handleUpdate = async () => {
    const res = await updateProduct(updatedProduct, product._id);

    console.log(res);
  };
  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Update Product</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <HStack>
              <Text>Name:</Text>
              <Input
                name="name"
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
                value={updatedProduct.name}
              />
            </HStack>
            <HStack>
              <Text>Price:</Text>
              <Input
                name="price"
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
                value={updatedProduct.price}
              />
            </HStack>
            <HStack>
              <Text>Image:</Text>
              <Input
                name="image"
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
                value={updatedProduct.image}
              />
            </HStack>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button onClick={handleUpdate}>Update</Button>
            </Dialog.ActionTrigger>
          </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
};

export default Update;
