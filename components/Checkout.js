import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../app/slices/basketSlice";

function Checkout({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const removeItems = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 py-2 border-b-2">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className=" col-span-3 mx-5">
        <p className=" text-xl line-clamp-1 sm:line-clamp-2 md:line-clamp-none">
          {title}
        </p>
        <p className=" my-2 text-xs line-clamp-2 md:line-clamp-none">
          {description}
        </p>
        <p>${price}</p>
      </div>
      <div className=" col-span-1 mt-10 whitespace-nowrap ">
        <button
          onClick={removeItems}
          className="hidden md:flex items-center bg-red-300 px-4 rounded-lg h-10 w-fit hover:bg-red-500 hover:border-2"
        >
          Remove from Basket{" "}
        </button>
        <button
          onClick={removeItems}
          className="md:hidden flex items-center bg-red-300 px-6 rounded-lg h-10 w-fit hover:bg-red-500 hover:border-2"
        >
          Remove{" "}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
