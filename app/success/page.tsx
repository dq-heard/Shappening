"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "../shared/font-awesome-icons";
import { runFireworks } from "./utils";

const Page = () => {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h3 className="font-tertiary text-primary">SUCCESS</h3>
      <h1 className="text-dark">Your order has been placed! 🎉</h1>
      <p>Thank you for your purchase!</p>
      <Link
        href="/"
        className="btn btn-primary border-inner py-3 px-5 mt-4 d-flex align-items-center gap-2"
      >
        Continue shopping <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default Page;
