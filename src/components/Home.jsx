import React from "react";
import { useApiData } from "./ApiDataProvider";

export const Home = () => {
  const { data } = useApiData();

  const bgUrl = data?.backgrounds?.[0]?.image?.fileUrl;
  console.log(bgUrl, "api dagta");

  return (
    <div id="home">
      <div
        // style={{ backgroundImage: (`${bgUrl}`) }}
        className="bg-image bg-cover bg-center min-h-screen min-w-full"
      >
        <div className="bg-black min-h-screen opacity-70 flex flex-col items-center justify-center">
          <h1
            className="text-white text-4xl mobileS:text-2xl mobileM:text-2xl font-display pb-[2rem]"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            
            {data?.groomName?.split(" ")?.[0]} &{" "}
            {data?.brideName?.split(" ")?.[0]}
          </h1>
          <div className="bg-white tablet:w-[70%] laptop1:w-[40%] mobileM:w-[100%] h-[1px] mb-[1rem] flex"></div>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className=" flex items-center justify-center text-white tracking-[0.4rem] font-display tablet:text-2xl mobileS:text-sm"
          >
            WE'RE GETTING MARRIED
          </h1>
          <div className="bg-white tablet:w-[70%] mobileM:w-[100%] laptop1:w-[40%] h-[1px] mt-[1rem] flex"></div>
        </div>
      </div>
    </div>
  );
};
