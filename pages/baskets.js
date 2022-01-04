import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../app/slices/basketSlice";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
const stripePromise = loadStripe(process.env.stripe_public_key);

function baskets() {
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);
  console.log(items);

  const createCheckoutSession = async () => {
    try {
      const stripe = await stripePromise;

      const CheckoutSession = await axios.post("/api/create-checkout-session", {
        items: items,
        email: session.user.email,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: CheckoutSession.data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-7xl mx-auto">
        <div className=" flex-grow m-5 shadow-lg">
          <div className=" flex flex-col p-5 space-y-8 bg-white">
            <h1 className="">
              {items.length === 0 ? "Your Basket is Empty" : "Your Basket"}
            </h1>

            {items.map((item, i) => (
              <Checkout
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                //product also item.product.id
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-lg">
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap ">
                Total ({items.length} items):
                <span className="font-bold">{total}</span>
              </h2>
              <button
                role="Link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={` bg-green-300 p-2  rounded-md mt-2 hover:bg-green-500 ${
                  !session &&
                  " bg-gray-300 text-black cursor-not-allowed p-2 rounded-md"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to CheckOut"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default baskets;
