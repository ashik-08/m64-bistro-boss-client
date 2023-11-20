import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ food }) => {
  const { _id, name, image, recipe, price } = food;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = async () => {
    if (user?.email) {
      const toastId = toast.loading("Adding Cart Item...");
      const cartItem = {
        menuId: _id,
        email: user?.email,
        image,
        name,
        price,
      };
      console.log(cartItem);

      try {
        const response = await axiosSecure.post("/carts", cartItem);
        console.log(response.data);
        if (response.data.insertedId) {
          toast.success("Cart Item Added Successfully.", { id: toastId });
          refetch();
        } else if (response.data.message === "Already exists") {
          toast.error("Item already exists.", { id: toastId });
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while adding this item.", {
          id: toastId,
        });
      }
    } else {
      Swal.fire({
        title: "Not Logged In",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F3] p-5 space-y-5 card-effect rounded-xl h-full relative">
        <figure className="border-4 border-blue-gray-200 rounded-lg">
          <img className="rounded-md w-full" src={image} alt="food-image" />
        </figure>
        <div className="space-y-2 px-3 xl:text-lg text-center">
          <p className="text-lg xl:text-xl font-medium">{name}</p>
          <p className="text-para xl:text-lg ">{recipe}</p>
          {price && (
            <p className="absolute top-6 right-8 px-3 py-2 text-white text-sm font-medium bg-[#111827] rounded-lg">
              ${price}
            </p>
          )}
          <div className="pt-3">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline xl:text-lg text-title font-semibold bg-[#E8E8E8] border-0 border-b-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
