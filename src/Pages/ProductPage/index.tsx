import { Card, Progress, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDto } from "../../Model/ProductDto";
import { getProductById } from "../../services/Products/Products";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDto>();

  // Fetch product data from API using the id
  useEffect(() => {
    const productSpecific = async () => {
      try {
        const response = await getProductById(Number(id));
        if (response!.status === 200) {
          setProduct(response?.data.data.products);
        }
        return response;
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };
    productSpecific();
  }, [id]);
  return (
    <Card withBorder radius="md" p="xl">
      <Text fz="xs" tt="uppercase" fw={700}>
        {product?.name}
      </Text>
      <Text fz="lg" fw={500}>
        Description: {product?.description}
      </Text>
      <Text fz="md" fw={400}>
        Price: ${product?.price}
      </Text>
      <Text fz="md" fw={400}>
        Stock: {product?.stock}
      </Text>
      <Progress value={54.31} mt="md" size="lg" radius="xl" />
    </Card>
  );
}
