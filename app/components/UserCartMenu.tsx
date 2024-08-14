import { useContext } from "react";
import Link from "next/link";

import { FaRegUser, FiShoppingBag } from "../shared/font-awesome-icons";
import { CartContext } from "../context/CartContext";
import { CartPreview } from "../components";

const UserCartMenu: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("UserCartMenu must be used within a CartProvider");
  }

  const { totalQuantity, showCart, setShowCart } = cartContext;

  const handleCartClick = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <Link href="#">
        <FaRegUser className="fs-1" />
        <span className="login ms-1">Log In</span>
      </Link>
      <Link href="#">
        <div className="position-relative" onClick={handleCartClick}>
          <FiShoppingBag className="fs-1 ms-3" />
          <span className="position-absolute top-0 translate-middle badge border border-light rounded-circle bg-danger p-2">
            {totalQuantity}
          </span>
        </div>
      </Link>
      {showCart && (
        <>
          <div className="overlay" onClick={handleCartClick}></div>
          <CartPreview onClose={handleCartClick} />
        </>
      )}
    </>
  );
};

export default UserCartMenu;
