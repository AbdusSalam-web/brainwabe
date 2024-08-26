import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sa from "../assets/sa.png";
import sb from "../assets/sb.png";
import sc from "../assets/sc.png";
import man from '../assets/man.png'
import { faArrowRightLong, faStar } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <p className="font-Gilory font-bold text-[13px] text-[#F64B4B] text-center   ">
                Our services
              </p>
              <h4
                className="font-Gilory font-bold text-[36px] leading-[48px] tracking-[1.5px] text-[
            #161C2D] text-center w-[650px] mt-[25px] mx-auto "
              >
                We provide great services for our customers based on needs
              </h4>
            </div>
            <div className=" flex mt-[81px] items-center gap-[31px] ">
              <div className="bg-[#83FFA3] rounded-[10px]  drop-shadow-2xl">
                <img
                  src={sa}
                  alt="Service image."
                  className="mx-auto h-[118px] mt-[60px] "
                />
                <h5 className="mb-[15px] mt-[41px] font-Gilory fotn-bold text-[24px] leading-[34px] text-[#FFF] text-center   ">
                  Graphic Design
                </h5>
                <p className="font-Gilory font-normal text-[17px] leading-[29px] text-[rgba(255,255,255,0.8)] mx-[27px] mt-[15px] mb-[45px]  ">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <button className=" flex gap-[27px] items-center justify-center mx-auto mb-[38px] font-Gilory font-bold tex-[17px] leading-[32px] text-[#FFF]  ">
                  Learn more
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
              <div className="bg-[#407BFF] rounded-[10px] drop-shadow-2xl ">
                <img
                  src={sb}
                  alt="Service image."
                  className="mx-auto h-[118px] mt-[60px] "
                />
                <h5 className="mb-[15px] mt-[41px] font-Gilory fotn-bold text-[24px] leading-[34px] text-[#FFF] text-center   ">
                  Web Development
                </h5>
                <p className="font-Gilory font-normal text-[17px] leading-[29px] text-[rgba(255,255,255,0.8)] mx-[27px] mt-[15px] mb-[45px]  ">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <button className=" flex gap-[27px] items-center justify-center mx-auto mb-[38px] font-Gilory font-bold tex-[17px] leading-[32px] text-[#FFF]  ">
                  Learn more
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
              <div className="bg-[#FF7171] rounded-[10px] drop-shadow-2xl ">
                <img
                  src={sc}
                  alt="Service image."
                  className="mx-auto h-[118px] mt-[60px] "
                />
                <h5 className="mb-[15px] mt-[41px] font-Gilory fotn-bold text-[24px] leading-[34px] text-[#FFF] text-center   ">
                  Content Writing
                </h5>
                <p className="font-Gilory font-normal text-[17px] leading-[29px] text-[rgba(255,255,255,0.8)] mx-[27px] mt-[15px] mb-[45px]">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <button className=" flex gap-[27px] items-center justify-center mx-auto mb-[38px] font-Gilory font-bold tex-[17px] leading-[32px] text-[#FFF]  ">
                  Learn more
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-[98px] ml-[79px] gap-[81px] items-center mb-[122px]  ">
            <img src={man} alt="Author" />
            <div>
              <div>
                <FontAwesomeIcon icon={faStar} className="text-[#FCAD38]" />
                <FontAwesomeIcon icon={faStar} className="text-[#FCAD38]" />
                <FontAwesomeIcon icon={faStar} className="text-[#FCAD38]" />
                <FontAwesomeIcon icon={faStar} className="text-[#FCAD38]" />
                <FontAwesomeIcon icon={faStar} className="text-[#FCAD38]" />
              </div>
              <p className="font-Gilory font-bold text-[24px] leading-[34px] text-[#161C2D] mt-[37px] mb-[15px]  ">
                “OMG! I cannot believe that I have got a brand new landing page
                after getting Albino. It was super easy to edit and publish.”
              </p>
              <p className="font-Gilory font-bold text-[17px] leading-[29px] text-[#161C2D]   ">
                Franklin Hicks ||
                <span className="text-[#5B606C]   ">Web Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
