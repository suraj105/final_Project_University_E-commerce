import moment from "moment";
import Image from "next/image";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className=" relative border rounded-md">
      <div className="flex items-center space-x-10 px-10 py-5 shadow-sm bg-slate-200">
        <div>
          <p className=" line-clamp-1 text-sm lg:text-base ">
            {" "}
            Placed orders...
          </p>
          <p className="text-xs lg:text-sm line-clamp-1">
            {moment.unix(timestamp).format("DD MM YYYY")}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold lg:text-base">TOTAL</p>
          <p className=" line-clamp-1 text-xs lg:text-sm">
            ${amount}-shipping included with ${amountShipping}
          </p>
        </div>

        <p className="text-sm font-bold whitespace-nowrap md:text-base self-end flex-1 text-right">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs lg:text-sm">
          Order no. {id}
        </p>
      </div>

      <div className=" p-5 sm:p-10 ">
        <div className="flex  space-x-10 ">
          {images.map((image) => (
            <Image src={image} width={100} height={100} objectFit="contain" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
