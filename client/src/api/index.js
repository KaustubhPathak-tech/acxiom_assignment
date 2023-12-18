import axios from "axios";
const API = axios.create({
  baseURL: "", //http://localhost:7000 https://med-hos-server.vercel.app
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const signUp = (authData) => API.post("/auth/signup", authData);
