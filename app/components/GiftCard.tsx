import React, { useState, useEffect, useContext } from "react";
import { client } from "@/sanity/lib/client";

import { CartContext } from "../context/CartContext";
import { GiftCard } from "../shared/types";

const amounts = ["25", "50", "100", "150", "200"];

const GiftCardComponent: React.FC = () => {
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);
  const [selectedGiftCard, setSelectedGiftCard] = useState<GiftCard | null>(
    null
  );
  const [selectedAmount, setSelectedAmount] = useState<string>("25");
  const [quantity, setQuantity] = useState<number>(1);
  const [forSomeoneElse, setForSomeoneElse] = useState<boolean>(true);

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { addItem } = cartContext;

  useEffect(() => {
    client.fetch<GiftCard[]>('*[_type == "giftCard"]').then((data) => {
      setGiftCards(data);
      if (data.length > 0) setSelectedGiftCard(data[0]);
    });
  }, []);

  const handleAmountChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    amount: string
  ) => {
    event.preventDefault();
    setSelectedAmount(amount);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleRecipientToggle = (forSelf: boolean) => {
    setForSomeoneElse(!forSelf);
  };

  const handleAddToCart = () => {
    if (selectedGiftCard) {
      addItem({
        _id: selectedGiftCard._id,
        _type: "giftCard",
        name: `$${selectedAmount} Gift Card`,
        price: parseFloat(selectedAmount),
        quantity,
        images: [selectedGiftCard.image],
      });
    }
  };

  return (
    <section className="container-fluid bg-gift my-5 py-5" id="e-gifts">
      <div className="container py-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <div
              className="section-title position-relative text-center mx-auto mb-4 pb-3"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-primary font-secondary">
                For Resin-ant Connections
              </h2>
              <h1 className="display-4 text-uppercase text-white">
                {selectedGiftCard ? `$${selectedAmount}` : "Select a Gift Card"}
              </h1>
            </div>
            <p className="text-white mb-4">
              You can't go wrong with a gift card. Choose an amount and write a
              personalized message to really make this gift your own.
            </p>
            <form style={{ maxWidth: "650px" }}>
              <div className="row">
                <div className="col-12 col-sm-8">
                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="form-label text-white d-block text-sm-center"
                    >
                      Amount
                    </label>
                    <div
                      className="btn-group amount"
                      role="group"
                      aria-label="Amount buttons"
                    >
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          className={`btn btn-secondary me-2 ${selectedAmount === amount ? "active" : ""}`}
                          onClick={(event) => handleAmountChange(event, amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-3 mx-auto"
                  style={{ maxWidth: "167px" }}
                >
                  <div className="mb-4">
                    <label htmlFor="quantity" className="form-label text-white">
                      Quantity
                    </label>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        className="form-control"
                        value={quantity}
                        aria-label="Gift Card Quantity"
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-8">
                  <div className="mb-4">
                    <label
                      htmlFor="recipient"
                      className="form-label text-white d-block"
                    >
                      Who's the Gift Card for?
                    </label>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Filter buttons"
                    >
                      <button
                        type="button"
                        className={`btn btn-secondary me-2 ${forSomeoneElse ? "active" : ""}`}
                        onClick={() => handleRecipientToggle(false)}
                      >
                        For Someone Else
                      </button>
                      <button
                        type="button"
                        className={`btn btn-secondary ${!forSomeoneElse ? "active" : ""}`}
                        onClick={() => handleRecipientToggle(true)}
                      >
                        For Myself
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
                  {forSomeoneElse ? (
                    <div className="w-100 d-flex justify-content-center">
                      <div className="mb-4 w-100">
                        <label htmlFor="date" className="form-label text-white">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="form-control"
                          placeholder="Now"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-100 d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-primary border-inner py-3 px-5"
                        id="submit"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {forSomeoneElse && (
                <>
                  <div className="row mb-4 justify-content-between">
                    <div
                      className="col-sm mb-4 mx-auto m-sm-0"
                      style={{ maxWidth: "290px" }}
                    >
                      <div className="form-outline" id="email">
                        <input
                          type="email"
                          id="email"
                          className="form-control ms-xl-4"
                          placeholder="Recipient e-Mail*"
                        />
                      </div>
                    </div>
                    <div
                      className="col-sm mb-4 mx-auto m-sm-0"
                      style={{ maxWidth: "290px" }}
                    >
                      <div className="form-outline" id="name">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Recipient Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex justify-content-around align-items-center">
                    <div
                      className="form-outline mb-4"
                      style={{ flexGrow: "1", maxWidth: "350px" }}
                      id="message"
                    >
                      <textarea
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary border-inner py-3 px-5"
                      id="submit"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardComponent;
