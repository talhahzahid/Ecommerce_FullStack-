import React from "react";
import Link from "next/link";
import Image from "next/image";
import nike from "@/public/Nike_logo_emblem_logotype 1.png";
import figma from "@/public/figma-1-logo 1.png";
import kronos from "@/public/kronos-logo-1-1 1.png";
const News = () => {
  return (
    <>
      <h1 className="text-center mt-[4rem] text-xl font-semibold">
        LATEST NEWS
      </h1>

      <div className="flex justify-around flex-wrap gap-8 mt-10">
        {/* News Item 1 */}
        <div className="flex items-center">
          <Image src={nike} alt="Fashion Industry News" />
          <div>
            <h1 className="text-xl font-semibold">Fashion Industry</h1>
            <h2>
              Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
              typesetting <br /> industry.
            </h2>
          </div>
        </div>

        {/* News Item 2 */}
        <div className="flex items-center">
          <Image src={figma} alt="Fashion Industry News" />
          <div>
            <h1 className="text-xl font-semibold">Fashion Industry</h1>
            <h2>
              Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
              typesetting <br /> industry.
            </h2>
          </div>
        </div>

        {/* News Item 3 */}
        <div className="flex items-center">
          <Image src={kronos} alt="Fashion Industry News" />
          <div>
            <h1 className="text-xl font-semibold">Fashion Industry</h1>
            <h2>
              Lorem Ipsum is simply <br /> dummy text of the <br /> printing and
              typesetting <br /> industry.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
