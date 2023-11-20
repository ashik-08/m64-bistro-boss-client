import { Helmet } from "react-helmet-async";
import Title from "../../../components/Dashboard/Title/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_upload_api = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_UPLOAD_APIKEY
}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Adding New Item...");
    // image upload to imgBB
    const imageFile = { image: data.image[0] };
    try {
      const response = await axiosPublic.post(image_upload_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      if (response.data.success) {
        const menuItem = {
          name: data.name,
          recipe: data.details,
          image: response.data.data.display_url,
          category: data.category,
          price: Number(data.price),
        };
        try {
          const response = await axiosSecure.post("/menu", menuItem);
          console.log(response.data);
          if (response.data.insertedId) {
            toast.success("Item Added Successfully.", { id: toastId });
            reset();
          } else if (response.data.message === "Already exists") {
            toast.success("Item already exist.", { id: toastId });
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while adding this item.", {
            id: toastId,
          });
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding this item.", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <section>
        <Title subHeading={"---What's new?---"} heading={"add an item"} />
        <div className="bg-white px-5 md:px-12 lg:px-20 py-20 rounded-xl">
          <form
            // onSubmit={handleAddService}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <span className="space-y-4">
              <p className="text-lg font-semibold">Service Id</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="text"
                name="service_id"
                id=""
                placeholder="Service Id"
                required
              />
            </span> */}
              <span className="space-y-4 md:col-span-2">
                <p className="text-lg font-semibold">Recipe Name</p>
                <input
                  className="text-para bg-gray-50 w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                  type="text"
                  name="name"
                  {...register("name")}
                  id=""
                  placeholder="Service Name"
                  required
                />
              </span>
              <span className="space-y-4">
                <p className="text-lg font-semibold">Category</p>
                {/* <input
                  className="text-para bg-gray-50 w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                  type=""
                  name="category"
                  {...register("category")}
                  id=""
                  placeholder="Category"
                  required
                /> */}
                <select
                  {...register("category")}
                  className="text-para bg-gray-50 w-full px-5 py-4 rounded-lg outline outline-1 outline-para"
                  defaultValue={"default"}
                >
                  <option disabled value="default">
                    Category
                  </option>
                  <option value="offer">Offer</option>
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
                required
              />

              <span className="md:col-span-2">
                <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] text-white text-xl font-semibold py-4 w-full rounded-lg">
                  <input type="submit" value="Add Item" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddItem;
