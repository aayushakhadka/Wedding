import React, { useEffect, useRef, useState } from "react";
import gallery from "../data/gallery";
import Layout from "../common/Layout";
import { useApiData } from "./ApiDataProvider";
import Slider from "react-slick";

export const VisaLink = () => {
  return (
    <div className="flex justify-center mt-[3rem]">
      <a
        href="http://www.online.nepalimmigration.gov.np/tourist-visa"
        target="_blank"
        className=" flex items-center justify-center px-5 border-gray-400 border-[1px] h-[3.5rem] font-display text-xl"
      >
        NEPAL VISA APPLICATION LINK
      </a>
    </div>
  );
};
