import axios from "axios";
export default function api(permission = false): any {
  const headers: any = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  if (permission) {
    try {
      axios.interceptors.request.use((config) => {
        const token: any = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
        }

        return config;
      });
    } catch (err) {
      console.error(err);
    }
  }
  const client = axios.create({
    baseURL: "https://interview.t-alpha.com.br",
    timeout: 35000,
    headers,
  });
  return client;
}
