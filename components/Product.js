import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/slices/basketSlice";

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
    //hehehehehehhehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjdvhjdvshsavdsjhsajhsajvjavhsad {product}
  };

  return (
    <div className=" cursor-pointer  relative flex flex-col  m-5 bg-white p-5 rounded-2xl  shadow-2xl shadow-black">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <p className="flex items-center justify-center italic text-slate-500">
        {category}
      </p>
      <h3 className=" font-extrabold py-1 line-clamp-1">{title}</h3>
      <p className="py-2 pb-0 line-clamp-2">{description}</p>
      <p className="pb-2 text-center font-bold">${price}</p>
      <div className="flex justify-center">
        <button
          onClick={addItemToBasket}
          className=" flex items-center bg-green-300 px-4 rounded-lg h-10 w-fit hover:bg-green-500 hover:border-2"
        >
          {" "}
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
