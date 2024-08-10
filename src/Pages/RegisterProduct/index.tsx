import { Button, Notification, TextInput } from "@mantine/core";
import { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { ProductDto } from "../../Model/ProductDto";
import { createProduct } from "../../services/Products/Products";

export default function RegisterProduct() {
  const [value, setValue] = useState<ProductDto>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const [input, setReponse] = useState<string | null>(null);

  const token = useSelector((state: any) => state.authToken?.token);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValue((prev) => {
      const parsedValue =
        name === "price" || name === "stock" ? Number(value) : value;
      const data = { ...prev, [name]: parsedValue };
      return data;
    });
  }
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<AxiosResponse<any, any> | undefined> => {
    event.preventDefault();

    if (token) {
      const response = await createProduct(value);

      if (response?.data.success) {
        setReponse("Product register with success");
      } else {
        setReponse("Error creating product");
      }
      setValue({ name: "", description: "", price: 0, stock: 0 });
      return response;
    }
  };
  return (
    <div className="flex flex-col justify-center gap-4">
      {input && (
        <Notification
          onClose={() => setReponse(null)}
          className="font-bold  h-16 w-80 bg-zinc-800"
          title={input}
          classNames={{ title: "text-white" }}
        />
      )}
      <form
        className="flex flex-col gap-2 justify-center max-w-80"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-white"> Create Product</h1>
        <TextInput
          className="flex flex-col gap-2 w-80"
          classNames={{
            input: "bg-zinc-700 border-1 border-zinc-500 p-5",
            label: "text-zinc-100 font-bold",
          }}
          value={value.name}
          onChange={handleChange}
          name="name"
          label="Name"
          placeholder="digit the name product"
          required
          mt="md"
          color="gray"
          radius="md"
          autoComplete="nope"
        />
        <TextInput
          className="flex flex-col gap-2 w-80"
          classNames={{
            input: "bg-zinc-700 border-1 border-zinc-500 p-5",
            label: "text-zinc-100 font-bold",
          }}
          value={value.description}
          onChange={handleChange}
          name="description"
          label="Description"
          placeholder="Description"
          required
          mt="md"
          type="text"
          color="gray"
          radius="md"
          autoComplete="nope"
        />

        <TextInput
          className="flex flex-col gap-2 w-80"
          classNames={{
            input: "bg-zinc-700 border-1 border-zinc-500 p-5",
            label: "text-zinc-100 font-bold",
          }}
          value={value.price}
          onChange={handleChange}
          name="price"
          label="Price"
          placeholder="how many cust the product"
          required
          mt="md"
          type="number"
          color="gray"
          radius="md"
          autoComplete="nope"
        />

        <TextInput
          className="flex flex-col gap-2 w-80"
          classNames={{
            input: "bg-zinc-700 border-1 border-zinc-500 p-5",
            label: "text-zinc-100 font-bold",
          }}
          value={value.stock}
          onChange={handleChange}
          name="stock"
          label="Stock"
          placeholder="how many products in stock"
          required
          mt="md"
          type="number"
          color="gray"
          radius="md"
          autoComplete="nope"
        />

        <Button type="submit" className="font-bold w-80 h-12" color="indigo">
          Create Product
        </Button>
      </form>{" "}
    </div>
  );
}
