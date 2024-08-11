import { Button, TextInput } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import { CreateUserDto } from "../../Model/CreateUserDto";
import { RegisterForm } from "../../services/Authentication/Authentication";

export function Register() {
  const [value, setValue] = useState<CreateUserDto>({
    name: "",
    taxNumber: "",
    mail: "",
    phone: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValue((prev) => {
      const data = { ...prev, [name]: value };
      return data;
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await RegisterForm(value);
    return response;
  };
  return (
    <form
      className="flex flex-col gap-2 justify-center max-w-full"
      onSubmit={handleSubmit}
    >
      <TextInput
        className="flex flex-col gap-2 min-[320px]:w-80   max-[640px]: w-60"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-bold",
        }}
        onChange={handleChange}
        name="name"
        label="Name"
        value={value.name}
        placeholder="digit your name"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col gap-2  min-[320px]:w-80   max-[640px]: w-60"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-bold",
        }}
        onChange={handleChange}
        name="taxNumber"
        label="Tax Number"
        value={value.taxNumber}
        placeholder="digit your Tax Number"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col gap-2  min-[320px]:w-80   max-[640px]: w-60"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        onChange={handleChange}
        name="mail"
        label="Mail"
        value={value.mail}
        placeholder="example@mail.com"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col gap-2  min-[320px]:w-80   max-[640px]: w-60"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        onChange={handleChange}
        name="phone"
        label="Phone"
        value={value.phone}
        placeholder="digit your Phone"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col gap-2  min-[320px]:w-80   max-[640px]: w-60"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        onChange={handleChange}
        value={value.password}
        name="password"
        label="Password"
        type="password"
        placeholder="digit your password"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />

      <Button
        type="submit"
        className="font-bold  min-[320px]:w-80   max-[640px]: w-60"
        color="indigo"
      >
        Register
      </Button>
      <span className="text-zinc-100 font-light  min-[320px]:w-80   max-[640px]: w-60">
        You already have account?{" "}
        <a className="text-blue-600 font-bold" href={`/`}>
          Login
        </a>
      </span>
    </form>
  );
}
