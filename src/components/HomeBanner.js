import { Carousel } from "flowbite-react";
import React from "react";
import image1 from "../assets/minimalist.png";
import image2 from "../assets/new-collection.png";
import image3 from "../assets/new.png";
import image4 from "../assets/sale.png";
import image5 from "../assets/fashion.png";

export default function HomeBanner() {
  return (
    <>
      <div className="py-5 bg-slate-500">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img src={image1} alt="banner" />
            <img src={image2} alt="banner." />
            <img src={image3} alt="banner" />
            <img src={image4} alt="banner" />
            <img src={image5} alt="banner" />
          </Carousel>
        </div>
      </div>
    </>
  );
}
