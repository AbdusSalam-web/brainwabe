import React from "react";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
const Story = () => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <p className="font-Gilory font-bold text-[13px] text-[#F64B4B]   ">
              Our Story
            </p>
            <h5 className="font-Gilory font-bold text-[36px] leading-[48px] text-[#161C2D] w-[600px] mt-[40px] mb-[8px] ">
              We know how everything works and why your business is failing over
              and over again.
            </h5>
          </div>
          <div className="relative h-[883px]  ">
            <div>
              <img src={one} alt="Image" className="absolute top-[112px] " />
              <img src={two} alt="Image" className="absolute left-[520px] " />
              <img
                src={three}
                alt="Image"
                className="absolute left-[930px] top-[158px] "
              />
            </div>
            <p className=" absolute top-[485px] left-[540px] w-[500px] font-Gilory font-normal text-[17px] leading-[29px] text-[#161C2D] ">
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand. With lots of
              unique blocks, you can easily build a page without coding. Build
              your next landing page.
            </p>
          </div>
          <div className="flex items-center gap-[66px] mb-[175px] ">
            <div>
              <p className="font-Gilory font-bold text-[48px] leading-[58px] text-[#161C2D] text-center   ">
                1M+
              </p>
              <p className="font-Gilory font-bold text-[15px] leading-[32px] text-[#4a5163] text-center mt-[18px]   ">
                Customers visit Omega every month to get their service done.
              </p>
            </div>
            <div>
              <p className="font-Gilory font-bold text-[48px] leading-[58px] text-[#161C2D] text-center   ">
                92%
              </p>
              <p className="font-Gilory font-bold text-[15px] leading-[32px] text-[#4a5163] text-center mt-[18px]   ">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
            <div>
              <p className="font-Gilory font-bold text-[48px] leading-[58px] text-[#161C2D] text-center   ">
                4.9/5.0
              </p>
              <p className="font-Gilory font-bold text-[15px] leading-[32px] text-[#4a5163] text-center mt-[18px]   ">
                Average customer ratings we have got all over internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
