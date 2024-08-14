import { useContext, useEffect, useState, useRef } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Carousel } from "bootstrap";
import { Product, CartItem } from "../shared/types";
import { CartContext } from "../context/CartContext";

interface Props {
  product: Product;
}

const ItemDetails: React.FC<Props> = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const cartContext = useContext(CartContext);
  const carouselRef = useRef<HTMLDivElement>(null);

  const {
    qty = 1,
    setQty = () => {},
    incQty = () => {},
    decQty = () => {},
    cartItems = [],
    addItem = (item: CartItem, quantity: number) => {},
  } = cartContext || {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap").then(() => {
        if (carouselRef.current) {
          new Carousel(carouselRef.current, {
            interval: 3000,
            ride: "carousel",
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = product.images.map((image) => {
        return new Promise<void>((resolve, reject) => {
          const img = new window.Image();
          img.src = urlFor(image.asset).url() || "";
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
      });

      await Promise.all(promises);
      const urls = product.images.map((image) => urlFor(image.asset).url());
      setLoadedImages(urls);
    };

    preloadImages();
  }, [product.images]);

  const [localQty, setLocalQty] = useState<number>(qty);

  useEffect(() => {
    setLocalQty(qty);
  }, [qty]);

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), 1);
    setLocalQty(value);
    setQty(value);
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      _id: product._id,
      _type: "product",
      name: product.name,
      price: product.price,
      quantity: qty,
      images: product.images.map((image) => ({
        asset: image.asset,
        _key: image._key,
        _type: image._type,
      })),
    };
    addItem(cartItem, qty);
  };

  return (
    <div className="container py-5 mx-auto">
      <div className="row">
        <div className="col-lg-7 col-xl-8">
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            ref={carouselRef}
          >
            <div className="carousel-inner">
              {loadedImages.length > 0 &&
                loadedImages.map((imageUrl, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === index ? "active" : ""}`}
                  >
                    <Image
                      loader={() => imageUrl}
                      src={imageUrl}
                      alt={`Product image ${idx}`}
                      width={480}
                      height={480}
                      className="object-cover mx-auto"
                    />
                  </div>
                ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
              onClick={() =>
                setIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + product.images.length) %
                    product.images.length
                )
              }
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
              onClick={() =>
                setIndex((prevIndex) => (prevIndex + 1) % product.images.length)
              }
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
        <div className="col-lg-5 pt-3 pt-lg-0 col-xl-4">
          <h2>{product.name}</h2>
          <p className="text-muted text-capitalize">{product.category}</p>
          <h3 className="my-4">${product.price}</h3>
          <p className="mb-4" style={{ maxWidth: "400px" }}>
            {product.details}
          </p>
          <div className="d-flex gap-3 mb-4">
            <div className="input-group" style={{ width: "auto" }}>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={decQty}
              >
                -
              </button>
              <input
                type="number"
                className="form-control"
                value={localQty}
                onChange={handleQtyChange}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={incQty}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h4>Customization Notes</h4>
            <textarea
              className="form-control"
              id="message"
              rows={4}
              placeholder="For names, shapes, colors, sizes, and everything else."
              style={{ maxWidth: "400px" }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
