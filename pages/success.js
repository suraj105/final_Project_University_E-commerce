import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function success() {
  const router = useRouter();
  return (
    <div className="h-screen relative">
      <Header />

      <main className=" max-w-screen-lg mx-auto">
        <div className=" z-100 flex flex-col items-center p-10 rounded-lg  shadow-2xl whitespace-nowrap ">
          <div className="flex pt-10 flex-col items-center space-x-2">
            <h2 className=" text-lg md:text-2xl lg:text-3xl">
              Thank you very much.
            </h2>
            <h3 className=" text-xs md:text-lg lg:text-xl">
              Your Orders have been Placed
            </h3>
            <button
              onClick={() => router.push("/orders")}
              className="mt-10 px-5 py-2 rounded-md bg-green-300 hover:bg-green-500"
            >
              View Orders
            </button>
          </div>
        </div>
      </main>

      <div className=" hidden lg:inline z-1 absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default success;
