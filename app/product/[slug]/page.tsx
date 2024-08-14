"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import { Topbar, ItemDetails, UserCartMenu } from "../../components";
import {
  FaRegUser,
  FiShoppingBag,
  FaArrowLeftLong,
} from "../../shared/font-awesome-icons";
import { Product } from "../../shared/types";

const page = () => {
  const [sticky, setSticky] = useState(false);
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null); // Ensure product is of type Product or null

  useEffect(() => {
    const fetchProduct = async () => {
      const products: Product[] = await client.fetch(groq`*[_type=="product"]`);
      const foundProduct = products.find(
        (product) => product.slug.current === slug
      );
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [slug]);

  return (
    <>
      <Topbar />
      <section
        className={`navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 px-3 p-lg-0 border-white border-bottom ${sticky ? "sticky-top" : ""}`}
        id="nav"
      >
        <Link href="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 font-primary text-white">#Shappening</h1>
        </Link>
        <div className="d-inline-flex align-items-center justify-content-center d-lg-none">
          <UserCartMenu />
        </div>
      </section>

      <nav className="navbar bg-dark navbar-dark shadow-sm py-3 px-3 p-lg-0">
        <div className="container navbar-nav align-items-start">
          <Link href="/" className="nav-link">
            <FaArrowLeftLong className="me-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {product && <ItemDetails product={product} />}
    </>
  );
};

export default page;
