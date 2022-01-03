import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <div
      className="relative 
    bg-slate-700  flex space-x-20 overflow-scroll p-2 pt-0 whitespace-nowrap sm:space-x-30 scrollbar-hide"
    >
      <div className=" ">
        <h2
          onClick={() => router.push(`/mensclothing`)}
          className="opacity-70 text-white cursor-pointer hover:opacity-100 transition duration-100 transform hover:scale-110 active:text-lime-500 last:pr-6"
        >
          Men's Clothing
        </h2>
      </div>
      <div className=" ">
        <h2
          onClick={() => router.push(`/womensclothing`)}
          className="opacity-70 text-white cursor-pointer hover:opacity-100 transition duration-100 transform hover:scale-110 active:text-lime-500 last:pr-6"
        >
          Women's Clothing
        </h2>
      </div>
      <div className=" ">
        <h2
          onClick={() => router.push(`/electronics`)}
          className="opacity-70 text-white cursor-pointer hover:opacity-100 transition duration-100 transform hover:scale-110 active:text-lime-500 last:pr-6"
        >
          Electronics
        </h2>
      </div>
      <div className=" ">
        <h2
          onClick={() => router.push(`/jewelery`)}
          className="opacity-70 text-white cursor-pointer hover:opacity-100 transition duration-100 transform hover:scale-110 active:text-lime-500 last:pr-6"
        >
          Jewelery
        </h2>
      </div>
      <div className=" ">
        <h2
          onClick={() => router.push(`/tests`)}
          className="opacity-70 text-white cursor-pointer hover:opacity-100 transition duration-100 transform hover:scale-110 active:text-lime-500 last:pr-6"
        >
          Tests
        </h2>
      </div>

      <div className="absolute h-full w-10 bg-gradient-to-r from-transparent to-slate-700 top-0 right-0 md:hidden"></div>
    </div>
  );
}

export default Nav;
