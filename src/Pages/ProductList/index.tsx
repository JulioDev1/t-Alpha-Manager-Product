import { Button, Input, Modal, ScrollArea, Stack, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductDto } from "../../Model/ProductDto";
import {
  getAllProducts,
  updateProductApi,
} from "../../services/Products/Products";

export default function ProductList() {
  const [items, setItems] = useState<ProductDto[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [product, setProduct] = useState<ProductDto>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });
  const navigate = useNavigate();

  function openModal(product: ProductDto) {
    setProduct(product);
    open();
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setProduct((prev) => {
      const parsedValue =
        name === "price" || name === "stock" ? Number(value) : value;
      const data = { ...prev, [name]: parsedValue };
      return data;
    });
  }

  const getAll = async () => {
    try {
      const response = await getAllProducts();
      setItems(response?.data.data.products ?? []);
      return response;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const updateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(product, product.id);
      const response = await updateProductApi(product);
      return response;
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const rows = items.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td className="flex flex-row items-center gap-2 text-stone-50 font-medium">
        <div
          onClick={() => openModal(row)}
          className="flex cursor-pointer rounded-md items-center justify-center h-8 w-8 bg-blue-600/20"
        >
          <IconPencil className="cursor-pointer" size={20} color="#1289f8" />
        </div>
        <div className="flex rounded-md items-center justify-center h-8 w-8 bg-red-600/20">
          <IconTrash className="cursor-pointer" size={20} color="#f81212" />
        </div>
        <div className="flex rounded-md items-center justify-center h-8 w-8 bg-slate-600/20">
          <IconEye
            onClick={() => navigate(`/dashboard/productList/${row.id}`)}
            className="cursor-pointer"
            size={20}
            color="#eeeeee"
          />
        </div>
        {row.name}
      </Table.Td>
      <Table.Td className="text-stone-50 font-medium">
        {row.description}
      </Table.Td>
      <Table.Td className="text-stone-50 font-medium">{row.price}</Table.Td>
      <Table.Td className="text-stone-50 font-medium">{row.stock}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex justify-center items-center relative overflow-y-auto">
      <Modal
        opened={opened}
        onClose={close}
        title="Edit Product"
        key={product.id}
        centered
        styles={{
          body: {
            backgroundColor: "GrayText",
          },
          title: {
            color: "white",
          },
          header: {
            backgroundColor: "GrayText",
          },
        }}
      >
        {product && (
          <form onSubmit={updateProduct}>
            <Stack gap={20}>
              <Input
                placeholder="Product Name"
                name="name"
                value={product.name}
                onChange={handleChange}
                styles={{
                  input: {
                    backgroundColor: "GrayText",
                    border: "1px solid gray",
                  },
                }}
              />
              <Input
                name="description"
                value={product.description}
                onChange={handleChange}
                styles={{
                  input: {
                    backgroundColor: "GrayText",
                    border: "1px solid gray",
                  },
                }}
                placeholder="Description Name"
              />
              <Input
                styles={{
                  input: {
                    backgroundColor: "GrayText",
                    border: "1px solid gray",
                  },
                }}
                name="price"
                value={product.price}
                placeholder="Price Product"
                onChange={handleChange}
              />
              <Input
                styles={{
                  input: {
                    backgroundColor: "GrayText",
                    border: "1px solid gray",
                  },
                }}
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Quantity in stock"
              />
              <Button type="submit" color="indigo">
                Edit
              </Button>
            </Stack>
          </form>
        )}
      </Modal>
      <ScrollArea h={300}>
        <Table miw={1000} verticalSpacing={"lg"}>
          <Table.Thead
            className={`sticky top-0 bg-body transition-shadow duration-150 ease-in-out`}
          >
            <Table.Tr className="bg-stone-800 text-stone-800">
              <Table.Th className="text-left px-4 py-2 text-stone-300">
                Name
              </Table.Th>
              <Table.Th className="text-left px-4 py-2 text-stone-300">
                Description
              </Table.Th>
              <Table.Th className="text-left px-4 py-2 text-stone-300">
                Price
              </Table.Th>

              <Table.Th className="text-left px-4 py-2 text-stone-300">
                Stock
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows} </Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}
