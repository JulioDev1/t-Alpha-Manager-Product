import { ScrollArea, Table } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductDto } from "../../Model/ProductDto";
import { getAllProducts } from "../../services/Products/Products";

export default function ProductList() {
  const [items, setItems] = useState<ProductDto[]>([]);
  const navigate = useNavigate();
  const getAll = async () => {
    try {
      const response = await getAllProducts();
      console.log("response", response);
      setItems(response?.data.data.products ?? []);
      return response;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  const rows = items.map((row) => (
    <Table.Tr
      onClick={() => navigate(`/dashboard/productList/${row.id}`)}
      key={row.id}
    >
      <Table.Td className="flex flex-row items-center gap-2 text-stone-50 font-medium">
        <div className="flex rounded-md items-center justify-center h-8 w-8 bg-blue-600/20">
          <IconPencil size={20} color="#1289f8" />
        </div>
        <div className="flex rounded-md items-center justify-center h-8 w-8 bg-blue-600/20">
          <IconTrash size={20} color="#1289f8" />
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
