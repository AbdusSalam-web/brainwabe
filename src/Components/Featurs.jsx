import React from "react";
import manager from "../assets/mana.png";
import task from "../assets/task.png";
import chat from "../assets/chat.png";
import timer from "../assets/timer.png";
const Featurs = () => {
  return (
    <>
      <div className="bg-[#F4F7FA]  ">
        <div className="pt-[118px] w-[600px] mx-auto    ">
          <p className="font-Gilory font-bold text-[13px] text-[#F64B4B] uppercase text-center ">
            Why choose us
          </p>
          <h5 className="mt-[23px] mx-auto text-center font-Gilory font-bold text-[36px] leading-[48px] text-[#161C2D]   ">
            People choose us because we serve the best for everyone
          </h5>
        </div>
        <div className=" mt-[98px] flex flex-col gap-[80px] w-[868px] mx-auto ">
          <div className=" flex justify-between  ">
            <div className=" w-[550px] flex gap-[30px]   ">
              <div>
                <img src={manager} alt="" className="mt-[6px]  " />
              </div>
              <div>
                <h4 className="font-Gilory font-bold text-[21px] leading-[32px] text-[#161C2D]  ">
                  Dedicated project manager
                </h4>
                <p className="font-Gilory font-normal text-[17px ] leading-[29px] text-[#161C2D] w-[280px] mt-[15px] ">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </div>
            <div className=" w-[550px] flex gap-[30px]">
              <div>
                <img src={task} alt="" className="mt-[6px]  " />
              </div>
              <div>
                <h4 className="font-Gilory font-bold text-[21px] leading-[32px] text-[#161C2D]  ">
                  Organized tasks
                </h4>
                <p className="font-Gilory font-normal text-[17px ] leading-[29px] text-[#161C2D] w-[280px] mt-[15px] ">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between  ">
            <div className=" w-[550px] flex gap-[30px]   ">
              <div>
                <img src={chat} alt="" className="mt-[6px]  " />
              </div>
              <div>
                <h4 className="font-Gilory font-bold text-[21px] leading-[32px] text-[#161C2D]  ">
                  Easy feedback sharing
                </h4>
                <p className="font-Gilory font-normal text-[17px ] leading-[29px] text-[#161C2D] w-[280px] mt-[15px] ">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </div>
            <div className="w-[550px] flex gap-[30px]  ">
              <div>
                <img src={timer} alt="" className="mt-[6px]  " />
              </div>
              <div>
                <h4 className="font-Gilory font-bold text-[21px] leading-[32px] text-[#161C2D]  ">
                  Never miss deadline
                </h4>
                <p className="font-Gilory font-normal text-[17px ] leading-[29px] text-[#161C2D] w-[280px] mt-[15px] ">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="pt-[205px] flex gap-[301px] items-center w-[1100px] mx-auto ">
        <div className="w-[590px]  ">
          <h4 className="font-Gilory font-bold text-[32px] leading-[44px] text-[#161C2D]  ">
            Ready to launch your next project?
          </h4>
          <p className="font-Gilory font-bold text-[15px] leading-[32px] text-[#161C2D] mt-[20px]  ">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div>
          <button className="w-[220px] h-[60px] rounded-[8px] bg-[#473BF0] font-Gilory font-bold text-[17px] leading-[32px] text-[#FFF]  ">
            Get started a project
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Featurs;
