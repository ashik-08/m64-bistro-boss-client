import { Helmet } from "react-helmet-async";
import Title from "../../../components/Dashboard/Title/Title";
import useCart from "../../../components/hooks/useCart";
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const TABLE_HEAD = ["", "Item Image", "Item Name", "Price", "Action"];

  const handleCartDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Deleting Cart Item...");
        // delete own cart item from database
        try {
          const response = await axiosSecure.delete(`/carts/${id}`);
          console.log(response.data);
          if (response.data.deletedCount > 0) {
            toast.success("Cart Item Deleted Successfully.", { id: toastId });
            refetch();
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while deleting this item.", {
            id: toastId,
          });
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Cart</title>
      </Helmet>
      <section>
        <Title subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"} />
        <div className="bg-white p-12 rounded-xl">
          <div className="flex justify-between items-center text-xl md:text-2xl xl:text-3xl font-cinzel font-bold uppercase">
            <h1>total orders: {cart.length}</h1>
            <h1>total price: ${totalPrice}</h1>
            <button className="bg-dash text-white md:text-lg px-3 py-2 rounded-lg">
              PAY
            </button>
          </div>
          {/* TABLE */}
          <Card className="h-full w-full p-4 mt-8">
            <CardBody className="overflow-scroll px-0">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="bg-dash p-4">
                        <Typography
                          variant="paragraph"
                          color="white"
                          className="font-normal leading-none uppercase"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cart?.map(({ _id, image, name, price }, index) => {
                    const isLast = index === cart?.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={_id}>
                        <td className={classes}>{index + 1}</td>
                        <td className={classes}>
                          <Avatar src={image} alt={name} size="xxl" />
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="lead"
                            color="blue-gray"
                            className="font-medium"
                          >
                            {" "}
                            {name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="paragraph"
                            className="font-medium"
                          >
                            ${price}
                          </Typography>
                        </td>
                        <td
                          className={classes}
                          onClick={() => handleCartDelete(_id)}
                        >
                          <Tooltip content="Delete Item">
                            <IconButton variant="text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10 bg-[#B91C1C] text-white p-2.5 rounded-md"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CartPage;
