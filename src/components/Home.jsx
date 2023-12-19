import React from "react";

export const Home = () => {
  return (
    <div id="home">
      <div className="bg-image bg-cover bg-bottom bg-no-repeat w-[100%] h-[42rem] laptop1:h-[44rem] opacity-4 tablet:w-[170%] laptop:w-[100%] mobileS:w-[80rem] mobileS:overflow-hidden mobileM:w-[83rem]">
        <div className="bg-blue  h-[42rem] opacity-80 relative">
          <div className="flex flex-col justify-center items-center h-screen ">
            <div className="">
              <h1 className="tablet:text-7xl text-white font-custom italic mb-7 mobileS:text-9xl mobileS:mt-[5rem] tablet:mt-[0rem]">
                Suntina & Famico
              </h1>
              <div className="w-[100%] h-[1px] mt-9  bg-white"></div>
              <h1 className=" tablet:text-2xl mobileS:text-5xl text-white font-semi font-sans tablet:h-[3rem] mobileS:mt-[2rem] tablet:mt-[0rem] mobileS:h-[6rem] text-center tracking-[0.8rem]">
                WE'RE GETTING MARRIED
              </h1>
              <div className="w-[100%] h-[1px]  bg-white"></div>

              <div class="relative flex  flex-col justify-center items-center h-43rem w-">
                <div
                  class="tablet:h-[10rem] tablet:w-[20rem] bg-green-700 tablet:translate-y-full tablet:mt-[4rem] lg:mt-[7rem] 
            rounded-tl-full rounded-tr-full flex flex-col mobileS:h-[20rem] mobileS:w-[30rem] mobileS:translate-y-2/4"
                >
                  <h1 className="font-custom italic mt-7 flex items-center justify-center translate-y-full text-white tablet:text-2xl mobileS:text-4xl">
                    Save the date
                  </h1>
                  <h1 className="font-sans mt-5 flex items-center justify-center translate-y-full text-white tablet:text-xl mobileS:text-3xl">
                    25 DEC 2023
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
