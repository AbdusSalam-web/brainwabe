import React from "react";
import workImgA from "../assets/wa.png";
import workImgB from "../assets/wb.png";
import workImgC from "../assets/wc.png";
import workImgD from "../assets/wd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Works = () => {
  return (
    <>
      <div>
        <div className="w-[600px] mx-auto pt-[64px]  ">
          <p className="font-Gilory font-bold text-[13px] tracking-[1.65px] text-[#F64B4B] text-center  ">
            Case studies
          </p>
          <h4 className="font-Gilory font-bold text-[36px] leading-[48px] text-[#161C2D] text-center mt-[25px] ">
            Our works describe why we are the best in the business
          </h4>
        </div>
        <div className="mt-[95px] flex w-[1070px] justify-between mx-auto ">
          <div className="flex gap-[70px] flex-col ">
            <div>
              <img src={workImgA} alt="" />
              <div className="ml-[30px] mt-[35px]  ">
                <p className="font-Gilory font-normal text-[15px] leading-[26px] text-[#161C2D]  ">
                  Graphic Design
                </p>
                <h4 className="font-Gilory font-bold text-[24px] leading-[34px] text-[#161C2D] mt-[6px] ">
                  Aura Branding Design
                </h4>
              </div>
            </div>
            <div>
              <img src={workImgB} alt="" />
              <div className="ml-[30px] mt-[35px]  ">
                <p className="font-Gilory font-normal text-[15px] leading-[26px] text-[#161C2D]  ">
                  Graphic Design
                </p>
                <h4 className="font-Gilory font-bold text-[24px] leading-[34px] text-[#161C2D] mt-[6px] ">
                  Gradient Website Development
                </h4>
              </div>
            </div>
          </div>
          <div className="flex gap-[70px] flex-col ">
            <div>
              <img src={workImgC} alt="" />
              <div className="ml-[30px] mt-[35px]  ">
                <p className="font-Gilory font-normal text-[15px] leading-[26px] text-[#161C2D]  ">
                  Graphic Design
                </p>
                <h4 className="font-Gilory font-bold text-[24px] leading-[34px] text-[#161C2D] mt-[6px] ">
                  AB.S Snack Packaging
                </h4>
              </div>
            </div>
            <div>
              <img src={workImgD} alt="" />
              <div className="ml-[30px] mt-[35px]  ">
                <p className="font-Gilory font-normal text-[15px] leading-[26px] text-[#161C2D]  ">
                  Graphic Design
                </p>
                <h4 className="font-Gilory font-bold text-[24px] leading-[34px] text-[#161C2D] mt-[6px] ">
                  Magazine Content Writing
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[200px] mt-[95px] mb-[116px] ">
        <button className="font-Gilory font-bold text-[21px] leading-[32px] text-[#473BF0] flex items-center gap-[21px] ">
          See all works
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </>
  );
};

export default Works;
