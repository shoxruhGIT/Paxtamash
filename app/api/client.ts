import axios from "axios";
import { getLanguage } from "@/lib/languageStore";

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
});

apiClient.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = getLanguage();
  return config;
});
