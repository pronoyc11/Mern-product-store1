import { Button, Card, Image, Text, Dialog } from "@chakra-ui/react";
import Update from "./Update";
import { useProductStore } from "../store/products";

const ProductCard = ({ product }) => {

    const { deleteProducts } = useProductStore();

    const handleDelete = async ()=>{
        const res = await deleteProducts(product._id);
        console.log(res);
    }



  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      borderWidth={"1px"}
      borderColor={"black.500"}
      shadow={"md"}
    >
      <Image
        src={product.image}
        alt={product.name}
        aspectRatio={4 / 3}
        width="300px"
      />
      <Card.Body gap="1">
        <Card.Title>{product.name}</Card.Title>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="12">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="ghost">Update details</Button>
          </Dialog.Trigger>
          <Update product={product} />
        </Dialog.Root>
        <Button variant="solid" size={"sm"} onClick={handleDelete}>
          Delete
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
