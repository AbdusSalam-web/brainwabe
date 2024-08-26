import React from "react";
import ianKlein from "../assets/ianKlein.png";
const Testimonial = () => {
  return (
    <>
      <div className="w-full bg-[#473BF0] pt-[135px] ">
        <div>
          <p className="text-center  font-Gilory font-bold text-[13px] leading-[18px] tracking-[1.65px] text-[#68D585]  ">
            Testimonial
          </p>
          <h4 className="font-Gilory font-bold  text-[32px] leading-[44px] text-[#FFF] w-[700px] text-center mx-auto mt-[35px]">
            “Simply the best. Better than all the rest. I’d recommend this
            product to beginners and advanced users.”
          </h4>
        </div>
        <div className="flex mt-[45px] w-[150px] pb-[130px] mx-auto flex-col items-center ">
          <img src={ianKlein} alt="" />
          <div className="mt-[20px] flex items-center flex-col  ">
            <p className="font-Gilory font-bold text-[17px] leading-[29px] text-[#FFF]  ">Ian Klein</p>
            <p className="font-Gilory font-bold text-[15px] leading-[26px] text-[#c0bbbb]  ">Digital Marketer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
