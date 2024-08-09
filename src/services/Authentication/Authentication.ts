import { LoginDto } from "../../Model/LoginDto";
import api from "../api";

export const Authentication = async (auth: LoginDto) => {
  try {
    const response = await api(true).post("/api/auth/login", auth);
    return response;
  } catch (e) {
    console.log(e);
  }
};
