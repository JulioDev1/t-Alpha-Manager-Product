import axios, { AxiosInstance } from "axios";
export default function api(): AxiosInstance {
  const headers: any = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  };

  const client = axios.create({
    baseURL: "https://interview.t-alpha.com.br",
    timeout: 35000,
    headers,
  });
  return client;
}
