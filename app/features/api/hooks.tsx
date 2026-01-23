import useSWR from "swr";
import { rootRequests } from "./requests";
import useSWRMutation from "swr/mutation";
import { ContactPayload } from "@/types";

export const useHomeData = () => {
  const { data, error, isLoading, mutate } = useSWR("home", rootRequests.home);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export const useContact = () => {
  const { trigger, data, error, isMutating } = useSWRMutation<
    void,
    any,
    "contact",
    ContactPayload
  >("contact", (_, { arg }) => rootRequests.contact(arg));

  return {
    submit: trigger,
    data,
    error,
    isLoading: isMutating,
  };
};

export const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "products",
    rootRequests.products,
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export const useStaffs = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "staffs",
    rootRequests.staffs,
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export const useProductDetail = (id: number | null) => {
  const { data, error, isLoading, mutate } = useSWR(
    id ? ["productDetail", id] : null,
    id ? () => rootRequests.productDetail(id) : null,
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
