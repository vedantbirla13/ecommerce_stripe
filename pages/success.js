import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalQuantities, setTotalPrice } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalQuantities(0);
    setTotalPrice(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email for the reciept</p>
        <p className="description">
          If you have any questions please email
          <a href="mailto:order@example.com" className="email">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;