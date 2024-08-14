import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { CartContext } from "../context/CartContext";
import { FaRegTrashCan } from "../shared/font-awesome-icons";

interface CartPreviewProps {
  onClose: () => void;
}

const CartPreview: React.FC<CartPreviewProps> = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: Cart context is not available.</div>;
  }

  const { cartItems, totalPrice, toggleCartItemQty, onRemove, emptyCart } =
    cartContext;
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: string[] }>(
    {}
  );

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = cartItems.map(async (product) => {
        let urls: string[] = [];

        // Ensure product.images is defined
        if (!product.images) {
          console.error(`Product ${product._id} has no images`);
          return { productId: product._id, urls };
        }

        // Normalize images into an array
        const imagesArray = Array.isArray(product.images)
          ? product.images
          : [product.images];

        urls = await Promise.all(
          imagesArray.map(async (image) => {
            if (typeof image === "string") {
              // Handle if image is already a string URL
              return image;
            }

            // Handle if image is of type ImageAsset
            if ("asset" in image) {
              try {
                const img = new window.Image();
                img.src = urlFor(image.asset).url() || "";
                return new Promise<string>((resolve, reject) => {
                  img.onload = () => resolve(img.src);
                  img.onerror = () => reject("Image load error");
                });
              } catch (error) {
                console.error(`Failed to preload image: ${error}`);
                return ""; // Fallback to empty string on error
              }
            }

            // If image type is unknown, fallback
            return "";
          })
        );

        return { productId: product._id, urls };
      });

      const imageResults = await Promise.all(imagePromises);
      const imageMap = imageResults.reduce(
        (acc, { productId, urls }) => {
          acc[productId] = urls;
          return acc;
        },
        {} as { [key: string]: string[] }
      );

      setLoadedImages(imageMap);
    };

    preloadImages();
  }, [cartItems]);

  const handleQuantityChange = (id: string, value: "increase" | "decrease") => {
    toggleCartItemQty(id, value);
  };

  const removeParentheses = (str: string) => {
    return str.replace(/\s*\(.*?\)\s*/g, "");
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}. Response: ${errorText}`
        );
      }

      const data = await response.json();

      if (typeof window !== "undefined" && data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div className="cart-preview-container">
      <div className="cart-preview-header">
        <h5 className="pt-2">Cart: ${totalPrice.toFixed(2)} </h5>
        <button className="btn-close" onClick={onClose}></button>
      </div>
      <div className="cart-preview-items">
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((product) => (
            <div
              key={product._id}
              className="cart-item d-flex align-items-center py-2"
            >
              {loadedImages[product._id]?.[0] ? (
                <Image
                  src={loadedImages[product._id][0]}
                  alt={product.name}
                  width={84}
                  height={84}
                  className="object-cover mx-auto"
                  priority // Use priority for LCP images
                />
              ) : (
                <p>Loading image...</p>
              )}
              <div className="item-details mx-2 text-start">
                <h6>{removeParentheses(product.name)}</h6>
                <h6>${product.price.toFixed(2)}</h6>
                <div className="d-flex">
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() =>
                      handleQuantityChange(product._id, "decrease")
                    }
                  >
                    -
                  </button>
                  <span>{product.quantity || 0}</span>
                  <button
                    className="btn btn-outline-primary btn-sm ms-2"
                    onClick={() =>
                      handleQuantityChange(product._id, "increase")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="btn btn-secondary btn-sm ms-auto hover:btn-danger"
                onClick={() => onRemove(product._id)}
              >
                <FaRegTrashCan />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-preview-footer">
        {cartItems.length > 0 && (
          <div className="cart-preview-footer">
            <button className="btn btn-secondary" onClick={emptyCart}>
              Empty Cart
            </button>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPreview;
