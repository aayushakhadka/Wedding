import React from "react";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import QRCode from "react-qr-code";
import { useApiData } from "./ApiDataProvider";

export const Footer = () => {
  const { eventId } = useApiData();

  const [qrValue, setQrValue] = useState(""); // State to store the QR code value

  const handleChange = (e) => {
    setQrValue(e.target.value); // Update the QR code value on input change
  };

  return (
    <div>
      <div className=" bg-photo bg-cover max-w-full">
        <div className="bg-black opacity-70 p-[4rem]">
          <div className=" flex flex-col justify-center items-center gap-8">
            <h1 className="text-white text-5xl font-display text-center tracking-wide ">
              Share your memories
            </h1>
            {/* <h3 className="text-white font-display ">
              -Mick[The Groom]
            </h3> */}
              <div className="flex ">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <QRCode
              value={`${process.env.REACT_APP_F_BASE_URL}/memories/${eventId}`}
              size={200}
            />
          </div>
        </div>
          </div>
        
        </div>
        
      </div>
      <div className="flex items-center justify-around mobileS:flex-col mobileM:flex-col tablet:flex-row min-h-[5rem]">
        <p className="text-black flex mobileS:flex-col mobileM: flex-col tablet:flex-row items-center gap-2 mobileM:pl-[0.7rem] tablet:pl-[0rem] font-display">
          Designed & Developed By
          <a className=" " target="_blank" href="https://apptechnologies.co/">
            <span className=" text-cyan-600 tracking-wide font-display">
              App Technologies
            </span>
          </a>
        </p>

        <div className="flex justify-center relative gap-3">
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem]">
            <a target="_blank" href="https://www.facebook.com/apptechnologies1">
              <FaFacebookF className=" flex items-center translate-x-3 translate-y-3 text-white" />
            </a>
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem] ">
            <a target="_blank" href="https://twitter.com/AppTechnologies">
              <FaTwitter className=" flex items-center translate-x-3 translate-y-3 text-white " />
            </a>
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem] ">
            <a
              target="_blank"
              href="https://www.instagram.com/apptechnologies1/"
            >
              <FaInstagram className=" flex items-center translate-x-3 translate-y-3 text-white " />
            </a>
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem]">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/app-technologies-pvt-ltd/"
            >
              <FaLinkedinIn className="flex items-center translate-x-3 translate-y-3 text-white " />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
