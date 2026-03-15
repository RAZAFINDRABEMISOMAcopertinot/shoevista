import axios from "axios";
import React, { useEffect, useState } from "react";
import HorSlider from "./HorSlider";

const ShopBy = ({ filter, title }) => {
  const data = [
    {
      src: "/GenInfo/free-shipping.png",
      title: "Free Shipping",
      text: "On all orders",
    },
    {
      src: "/GenInfo/coins.png",
      title: "Payment Options",
      text: "COD, cards, mobile payments",
    },
    {
      src: "/GenInfo/product-return.png",
      title: "Free Returns",
      text: "Refunds within 7 days",
    },
    {
      src: "/GenInfo/support.png",
      title: "24/7 Support",
      text: "Always here to help",
    },
  ];

  return (
    <>
      <div className="mt-10 mb-2 text-2xl">{title}</div>
      <div className="overflow-x-auto overflow-y-hidden md:max-w-full scroll-container mb-10 mx-auto relative scroll-container">

        <div className="flex flex-nowrap space-x-4">
          {/* Ensure products is always an array */}
          {data.map((elem) => (
            <HorSlider
              product={elem}
              key={elem._id || elem.id} // fallback if _id is missing
              className="inline-block"
              home={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopBy;
