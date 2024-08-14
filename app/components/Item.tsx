import React from "react";
import Link from "next/link";
import { Product } from "../shared/types";

interface Props {
  product: Product;
}

const Item: React.FC<Props> = ({ product }) => {
  const mainImageUrl = product.images[0];
  const hoverImageUrl = product.images[1];

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div id={product._id} className="single-product">
        <Link
          href={`/product/${product.slug.current}`}
          className="product-link"
        >
          <div
            className="part-1"
            style={{
              background: mainImageUrl
                ? `url(${mainImageUrl}) no-repeat center`
                : undefined,
              backgroundSize: "cover",
            }}
          >
            {hoverImageUrl && (
              <div
                className="part-1-image-hover"
                style={{
                  backgroundImage: `url(${hoverImageUrl})`,
                }}
              ></div>
            )}
            {product.best_seller && (
              <span className="best-seller">Best Seller</span>
            )}
            {product.new && <span className="new">New</span>}
            <div className="view-more">View More</div>
          </div>
          <div className="part-2">
            <h3 className="product-title">{product.name}</h3>
            <h4 className="product-price">${product.price}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
