import React, { useEffect, useState } from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import { Product } from "../shared/types";
import { Item } from "../components";
import Subscribe from "./Subscribe";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const categories = ["coasters", "keychains", "trays", "misc"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData: Product[] =
          await client.fetch(groq`*[_type=="product"]{
            _id,
            name,
            slug,
            price,
            "images": images[0..1].asset->url,
            category,
            new,
            best_seller
          }`);

        setProducts(productsData);
        setCurrentCategory(categories[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
  };

  const filteredProducts =
    currentCategory === ""
      ? products
      : products.filter((product) => product.category === currentCategory);

  return (
    <section className="container-fluid about py-5 px-0" id="shop">
      <div className="container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-primary font-secondary">Make It Shappen</h2>
          <h1 className="display-4 text-uppercase">Order Yours Now!</h1>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
            {categories.map((category) => (
              <li key={category} className="nav-item">
                <Link
                  className={`nav-link text-white ${currentCategory === category ? "active" : ""}`}
                  data-bs-toggle="pill"
                  href="#"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <div className="tab-content row">
            {filteredProducts.map((product) => (
              <Item key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Subscribe />
    </section>
  );
};

export default Shop;
