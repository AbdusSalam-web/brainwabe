import React from 'react'
import headerImage from '../assets/headerimg.png'
const Header = () => {
  return (
    <>
      <div>
        {" "}
        <div className="container">
          <div className="flex items-center justify-between mt-[16px] ">
            <div className="flex gap-[48px] items-center ">
              <div>
                <h4 className="font-Rubik font-bold text-[24px] text-[#161C2D]  ">
                  Brainwave.io
                </h4>
              </div>
              <div>
                <ul className="flex gap-[30px] items-center font-Gilory font-bold text-[15px] leading-[26px] text-[#161C2D]  ">
                  <li className=" transition-all duration-300 hover:text-[rgba(22,28,45,0.8)]  ">
                    <a href="#">Demos</a>
                  </li>
                  <li className=" transition-all duration-300 hover:text-[rgba(22,28,45,0.8)]  ">
                    <a href="#">Pages</a>
                  </li>
                  <li className=" transition-all duration-300 hover:text-[rgba(22,28,45,0.8)]  ">
                    <a href="#">Support</a>
                  </li>
                  <li className=" transition-all duration-300 hover:text-[rgba(22,28,45,0.8)]  ">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button className="w-[209px] h-[50px] bg-[#473BF0]  font-Gilory font-bold text-[17px] text-[#FFF] rounded-[8px] transition-all duration-300 hover:text-opacity-90">
                Get started a project
              </button>
            </div>
          </div>
          <div className="mt-[95px] mb-[136px] flex items-center justify-between ">
            <div>
              <p className="font-Gilory font-bold text-[13px] text-[#F64B4B] tracking-[1.63px]  ">
                Let’s shift your business
              </p>
              <h1 className="font-Gilory font-bold text-[60px] leading-[65px] tracking-[2px] text-[#161C2D] py-[25px] w-[620px] ">
                Shift your business fast with Shade Pro.
              </h1>
              <p className="font-Gilory font-normal text-[19px] leading-[32px] text-[#161C2D] w-[500px] ">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes.
              </p>
              <button className="w-[209px] h-[50px] bg-[#473BF0]  font-Gilory font-bold text-[17px] text-[#FFF] rounded-[8px] mt-[35px] transition-all duration-300 hover:text-opacity-90">
                Get started a project
              </button>
            </div>

            <div>
              <img src={headerImage} alt="Header image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header