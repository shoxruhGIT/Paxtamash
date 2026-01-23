import { apiClient, endpoints } from "@/app/api";
import {
  AccountsResponseSchema,
  homeSchema,
  ProductDetailSchema,
  ProductsResponseSchema,
} from "./schema";

export const rootRequests = {
  home: async () => {
    const response = await apiClient.get(endpoints.root.home);

    return homeSchema.parse(response.data);
  },
  contact: async (data: {
    full_name: string;
    phone: string;
    email: string;
    message?: string;
  }) => {
    await apiClient.post(endpoints.root.contact, data);
  },
  products: async () => {
    const response = await apiClient.get(endpoints.root.products);

    return ProductsResponseSchema.parse(response.data);
  },

  staffs: async () => {
    const response = await apiClient.get(endpoints.root.staffs);
    return AccountsResponseSchema.parse(response.data);
  },
  productDetail: async (id: number) => {
    const response = await apiClient.get(endpoints.root.productById(id));
    return ProductDetailSchema.parse(response.data);
  },
};
