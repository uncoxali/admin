import axios from "axios";
import accessToken from "./jwt-token-access/accessToken";

//pass new generated access token here
// const token = accessToken;

//apply base url for axios
const API_URL = "https://adminv1.finestel.com";

const axiosApi = axios.create({
  baseURL: API_URL + "/finestelisboolish",
});

// axiosApi.defaults.headers.common["Authorization"] = `HMRAA ${
//   token && localStorage.getItem(token)?.replace(/"/g, "")
// }`;

axiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authUser")?.replace(/"/g, "");
    if (token) {
      config.headers.common["Authorization"] = `HMRAA ${localStorage
        .getItem("authUser")
        ?.replace(/"/g, "")}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url: string, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function login(url: string, data: any, header: any) {
  return axiosApi
    .post(url, {}, { headers: data })
    .then((response) => response.data);
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, {}, { headers: data })
    .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url: string, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
