import useSWR from "swr";
import { rootRequests } from "./requests";

export const useHomeData = () => {
  return useSWR("homeData", rootRequests.home);
};
