import { Helmet } from "react-helmet-async";
import Title from "../../../components/Dashboard/Title/Title";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";

const image_upload_api = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_UPLOAD_APIKEY
}`;

const UpdateItem = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { name, category, price, recipe, image } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Updating Menu Item...");

    // Check if a new image is provided
    let imageUrl = data.image[0] ? await uploadImage(data.image[0]) : null;

    const updatedMenuItem = {
      name: data.name,
      recipe: data.details,
      image: imageUrl || image, // Use the new image or the previous one
      category: data.category,
      price: Number(data.price),
    };

    try {
      const response = await axiosSecure.patch(`/menu/${id}`, updatedMenuItem);
      console.log(response.data);

      if (response.data.modifiedCount > 0) {
        toast.success("Item Updated Successfully.", { id: toastId });
        reset();
        navigate("/dashboard/manage-items");
      } else if (response.data.modifiedCount === 0) {
        toast.error("First make some changes.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating this item.", {
        id: toastId,
      });
    }
  };

  const uploadImage = async (image) => {
    try {
      const response = await axiosPublic.post(image_upload_api, image, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      if (response.data.success) {
        return response.data.data.display_url;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Update Item</title>
      </Helmet>
      <section>
        <Title subHeading={"---Change Now---"} heading={"update an item"} />
        <div className="bg-white px-5 md:px-12 lg:px-20 py-20 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <span className="space-y-4 md:col-span-2">
                <p className="text-lg font-semibold">Recipe Name</p>
                <input
                  className="text-para bg-gray-50 w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                  type="text"
                  name="name"
                  defaultValue={name}
                  {...register("name")}
                  id=""
                  placeholder="Service Name"
                  required
                />
              </span>
              <span className="space-y-4">
                <p className="text-lg font-semibold">Category</p>
                <select
                  {...register("category")}
                  className="text-para bg-gray-50 w-full px-5 py-4 rounded-lg outline outline-1 outline-para"
                  defaultValue={category}
                >
                  <option disabled value="default">
                    Category
                  </option>
                  <option value="offered">Offer</option>
                  <option value="dessert">Dessert</option>
                  <option value="pizza">Pizza</option>
                  <option value="salad">Salad</option>
                  <option value="soup">Soup</option>
                  <option value="drinks">Drinks</option>
                </select>
              </span>
              <span className="space-y-4">
                <p className="text-lg font-semibold">Price</p>
                <input
                  className="text-para bg-gray-50 w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                  type="text"
                  name="price"
                  defaultValue={price}
                  {...register("price")}
                  id=""
                  placeholder="Price"
                  required
                />
              </span>
              <span className="space-y-4 md:col-span-2">
                <p className="text-lg font-semibold">Recipe Details</p>
                <textarea
                  className="text-para bg-gray-50 w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                  name="details"
                  defaultValue={recipe}
                  {...register("details")}
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Recipe Details"
                  required
                ></textarea>
              </span>
              <input
                {...register("image")}
                type="file"
                className="bg-gray-50 file-input file-input-ghost w-full max-w-xs"
              />
              <span className="md:col-span-2">
                <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] text-white text-xl font-semibold py-4 px-10 rounded-lg">
                  <input type="submit" value="Update Recipe Details" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateItem;
