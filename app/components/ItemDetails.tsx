import { useContext, useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { Product, CartItem } from "../shared/types";
import { CartContext } from "../context/CartContext";

interface Props {
  product: Product;
}

const ItemDetails: React.FC<Props> = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const cartContext = useContext(CartContext);

  const {
    qty = 1,
    setQty = () => {},
    incQty = () => {},
    decQty = () => {},
    cartItems = [],
    addItem = (item: CartItem, quantity: number) => {},
  } = cartContext || {};

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
          <Carousel
            interval={3000} // Adjust the interval time if needed
            activeIndex={index}
            onSelect={(selectedIndex) => setIndex(selectedIndex)}
          >
            {loadedImages.length > 0 &&
              loadedImages.map((imageUrl, idx) => (
                <Carousel.Item key={idx}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "480px", // Adjust to the desired height
                    }}
                  >
                    <Image
                      loader={() => imageUrl}
                      src={imageUrl}
                      alt={`Product image ${idx}`}
                      layout="fill" // Make the image fill its parent container
                      objectFit="cover" // Cover the container while maintaining aspect ratio
                      className="d-block w-100"
                    />
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
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
