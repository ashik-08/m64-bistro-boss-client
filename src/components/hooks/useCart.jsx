import { useContext } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const useCart = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user.email}`);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
