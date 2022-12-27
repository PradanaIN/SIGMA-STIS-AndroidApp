import axios from "axios";
import { BaseURL } from "./BaseURL";

const ApiService = axios.create({
    baseURL: BaseURL,
    responseType: "json",
    withCredentials: true
});

export default ApiService;

export const ApiToken = token => {
    return axios.create({
        baseURL: BaseURL,
        responseType: "json",
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};