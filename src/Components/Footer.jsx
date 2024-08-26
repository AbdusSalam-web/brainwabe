import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#161C2D]">
        <div className="container">
          <div className="w-[1110px] mx-auto  pt-[90px] flex items-center justify-between border-b-[1px] pb-[78px] border-b-[#706f6f] ">
            <div className="w-[600px]  ">
              <h4 className="font-Gilory font-bold text-[32px] leading-[44px] text-[#FFF]  ">
                Ready to launch your next project?
              </h4>
              <p className="font-Gilory font-bold text-[15px] leading-[32px] text-[#b6adad] mt-[20px]  ">
                With lots of unique s, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
            <button className="w-[220px] h-[60px] bg-[#473BF0] rounded-[10px] font-Gilory font-bold text-[17px] leading-[32px] text-[#FFF]  ">
              Get started a project
            </button>
          </div>
          <div className="flex mt-[125px] w-[1110px] mx-auto justify-between pb-[125px] ">
            <div>
              <a
                href="#"
                className="font-Rubik font-bold text-[28px] text-[#FFF]  "
              >
                Brainwave.io
              </a>
              <p className="font-Gilory font-normal text-[16px] leading-[26px] text-[#777474] mt-[36px] mb-[44px] w-[247px]   ">
                With lots of unique s, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <div className="flex gap-[25px] text-[#7D818D] ">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
            <div className="flex gap-[80px]  ">
              <div className="flex flex-col ">
                <p className=" font-Gilory font-normal text[15px] leading-[26px] text-[#979797] mb-[20px]  ">
                  Company
                </p>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] "
                >
                  Press
                </a>
              </div>
              <div className="flex flex-col">
                <p className=" font-Gilory font-normal text[15px] leading-[26px] text-[#979797] mb-[20px]  ">
                  Product
                </p>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] "
                >
                  Features{" "}
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] "
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] "
                >
                  News
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Help desk
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Support
                </a>
              </div>
              <div className="flex flex-col">
                <p className=" font-Gilory font-normal text[15px] leading-[26px] text-[#979797] mb-[20px]  ">
                  Services
                </p>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Digital Marketing
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Content Writing
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  SEO for Business
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  UI Design
                </a>
              </div>
              <div className="flex flex-col">
                <p className=" font-Gilory font-normal text[15px] leading-[26px] text-[#979797] mb-[20px]  ">
                  Legal
                </p>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] "
                >
                  Privacy Policy{" "}
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-[17px] leading-[40px] font-Gilory font-normal  text-[#FFF] -"
                >
                  Return Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
