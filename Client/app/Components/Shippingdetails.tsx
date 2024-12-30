import React from "react";
import shipping from "@/public/shipping.png";
import refund from "@/public/refund.png";
import path from "@/public/Path 4.png";
import Image from "next/image";
const Shippingdetails = () => {
  return (
    <>
      <div className="flex justify-around items-center gap-10 flex-wrap mt-[4rem]">
        {[
          {
            image: shipping,
            title: "FREE SHIPPING",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            image: refund,
            title: "FREE RETURNS",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            image: path,
            title: "EASY PAYMENTS",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ].map(({ image, title, description }, index) => (
          <div key={index} className="text-center">
            <Image src={image} alt={title} width={100} className="m-auto" />
            <h1 className="text-xl font-semibold mt-7">{title}</h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shippingdetails;
