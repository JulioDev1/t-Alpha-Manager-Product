import { CreateUserDto } from "../../Model/CreateUserDto";
import { LoginDto } from "../../Model/LoginDto";
import api from "../api";

export const Authentication = async (auth: LoginDto) => {
  try {
    const response = await api().post("/api/auth/login", auth, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const RegisterForm = async (register: CreateUserDto) => {
  try {
    const response = await api().post("/api/auth/register", register);
    return response;
  } catch (e) {
    console.error(e);
  }
};
