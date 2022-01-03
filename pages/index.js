import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Products from "../components/Products";

export default function Home({ products }) {
  return (
    <div className="">
      <header>
        <title>Apex Shoppers</title>
      </header>
      <Header />
      <Nav />
      <div className=" max-w-7xl mx-auto">
        <Banner />
        <Products products={products} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products/").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
