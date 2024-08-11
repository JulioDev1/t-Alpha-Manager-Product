import { Card, Text } from "@mantine/core";
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
          setProduct(response?.data.data.product);
        }
        return response;
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };
    productSpecific();
  }, [id]);
  return (
    <div className="flex items-center w-full  justify-around">
      <Card
        withBorder
        className="flex  sm:min-w-[476px] border-stone-600 items-start justify-between h-56 bg-stone-700"
        radius="md"
        p="xl"
      >
        <div>
          <Text className="font-bold md:text-lg text-[32px] lg:text-2xl text-white">
            {product?.name}
          </Text>
          <Text className="font-regular text-xl text-stone-400">
            Description: {product?.description}
          </Text>
        </div>
        <div>
          <Text className="font-bold text-2xl text-green-600">
            Price: ${product?.price}
          </Text>
          <Text fz="md" fw={400}>
            Stock: {product?.stock}
          </Text>
        </div>
      </Card>
    </div>
  );
}
