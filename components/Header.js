import Image from "next/image";
import logo from "../public/apexshoppers.png";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  LogoutIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../app/slices/basketSlice";

function Header() {
  const { data: session } = useSession();

  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <div className="flex sticky top-0  z-10 items-center bg-gray-700 p-2 flex-grow">
      <div className="flex  items-center mt-1 flex-grow sm:flex-grow-0">
        <Image
          onClick={() => router.push("/")}
          src={logo}
          height={50}
          width={150}
          objectFit="contain"
          className=" cursor-pointer "
        />
      </div>

      <div className=" hidden sm:flex items-center flex-grow bg-green-600  hover:bg-green-700 mx-4 rounded-t-md">
        <input
          type="text"
          placeholder="Search items"
          className=" h-10 w-full p-2 rounded-l-md focus:outline-none"
        />
        <SearchIcon className="h-10 p-2 rounded-lg" />
      </div>

      <div className="flex items-center justify-between space-x-4  text-white">
        <div
          onClick={signIn}
          className="flex items-center group  cursor-pointer mr-2 "
        >
          <UserIcon className="  h-10 p-2 rounded-lg group-hover:animate-bounce" />
          <span className="hidden md:inline whitespace-nowrap">
            {session ? `Hello , ${session.user.name}` : "Sign in"}
          </span>
        </div>

        <div
          onClick={() => router.push("/orders")}
          className="flex items-center group cursor-pointer mr-2"
        >
          <ArchiveIcon className="h-10 p-2 rounded-lg group-hover:animate-bounce" />
          <span className="hidden md:inline">Orders</span>
        </div>
        <div
          onClick={() => router.push("/baskets")}
          className="relative flex items-center group cursor-pointer pr-2"
        >
          <ShoppingBagIcon className="h-10 p-2 rounded-lg group-hover:animate-bounce " />
          <span className="hidden md:inline">Basket</span>
          <span className="absolute text-xs text-black top-0 left-6 bg-green-400 rounded-full px-1">
            {items.length}
          </span>
        </div>
        <button
          className=" whitespace-nowrap text-white h-full w-full z-10"
          onClick={signOut}
        >
          {session ? (
            <div className="flex items-center group">
              <LogoutIcon className="h-10 p-2 rounded-lg  group-hover:animate-bounce " />
              <p className=" hidden md:inline"> Sign Out </p>
            </div>
          ) : (
            <p></p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
