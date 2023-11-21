import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axiosPublic.get("/menu");
      return response.data;
    },
  });
  return [menu, refetch];

  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setMenu(data);
  //     });
  // }, []);

  // return [menu, loading];
};

export default useMenu;
