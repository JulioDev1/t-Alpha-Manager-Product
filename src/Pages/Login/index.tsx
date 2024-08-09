import { Button, TextInput } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginDto } from "../../Model/LoginDto";
import { Authentication } from "../../services/Authentication/Authentication";
import { setToken } from "../../store/authSlice";

export function Login() {
  const [value, setValue] = useState<LoginDto>({
    taxNumber: "",
    password: "",
  });
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.authToken?.token);
  const navigate = useNavigate();

  if (token) {
    navigate("/dashboard");
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValue((prev) => {
      const data = { ...prev, [name]: value };
      return data;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await Authentication(value);
    if (response.data.data.token) {
      localStorage.setItem("token", response.data.token);
      dispatch(setToken(response.data.data.token));
      navigate("/dashboard");
    }
  }
  console.log("ha tokens" + token);
  return (
    <form
      className="flex flex-col gap-2 justify-center max-w-full"
      onSubmit={handleSubmit}
    >
      <TextInput
        className="flex flex-col gap-2 w-80"
        classNames={{
          input: "bg-zinc-700 border-1 border-zinc-500 p-5",
          label: "text-zinc-100 font-bold",
        }}
        name="taxNumber"
        label="Tax Number"
        placeholder="digit your tax number"
        onChange={handleChange}
        value={value.taxNumber}
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
        name="password"
        label="Password"
        placeholder="digit your password"
        onChange={handleChange}
        value={value.password}
        required
        mt="md"
        color="gray"
        radius="md"
        autoComplete="nope"
      />
      <span className="text-zinc-100 font-light">
        Don't have account ?{" "}
        <a className="text-blue-600 font-bold" href={`/register`}>
          Register
        </a>
      </span>
      <Button type="submit" className="font-bold" color="indigo">
        Login
      </Button>
    </form>
  );
}
