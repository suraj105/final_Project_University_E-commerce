import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Products from "../components/Products";

function electronics({ items }) {
  return (
    <div>
      <Header />
      <Nav />
      <div className=" max-w-7xl mx-auto">
        <Products products={items} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const items = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json());

  return {
    props: {
      items,
    },
  };
}

export default electronics;
