import { apiClient, endpoints } from "@/app/api";
import { homeSchema } from "./schema";

export const rootRequests = {
  home: async () => {
    const response = await apiClient.get(endpoints.root.home);
    return homeSchema.parse(response.data);
  },
};
