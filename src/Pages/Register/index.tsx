import { Button, TextInput } from "@mantine/core";

export function Register() {
  return (
    <form className="flex flex-col gap-2 justify-center max-w-full">
      <TextInput
        className="flex flex-col w-80"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        name="name"
        label="Name"
        placeholder="digit your name"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col w-80"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        name="taxNumber"
        label="Tax Number"
        placeholder="digit your Tax Number"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col w-80"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        name="mail"
        label="Mail"
        placeholder="example@mail.com"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col w-80"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        name="phone"
        label="Phone"
        placeholder="digit your Phone"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <TextInput
        className="flex flex-col w-80"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-medium",
        }}
        name="password"
        label="Password"
        placeholder="digit your password"
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />

      <Button className="font-bold" color="indigo">
        Login
      </Button>
      <span className="text-zinc-100">
        you already have account?{" "}
        <a className="text-blue-600" href={`/`}>
          Register
        </a>
      </span>
    </form>
  );
}
