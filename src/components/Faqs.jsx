import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Layout from "../common/Layout";
import axios from "axios";

export const Faqs = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/faq`)
      .then((response) => {
        setFaqData(response.data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div id="faqs" style={{ marginBottom: "5rem" }}>
      <Layout style={{ height: "fit-content" }}>
        <div className="flex items-center justify-center pt-[6rem] ">
          <h1 className="font-display text-xl flex items-center justify-center w-[15rem] border-gray-400 border-[1px] h-[3.5rem]">
            FAQS
          </h1>
        </div>
        <div className="pt-[3rem]">
          {faqData?.map((faq, index) => (
            <div className="flex flex-col gap-2 font-display">
              <div
                key={index}
                className=" rounded mb-2 p-3 border-[1px] border-gray-400"
              >
                <div
                  className="flex justify-between items-center tablet:px-3 tablet:p-3 tablet:pt-4"
                  onClick={() => handleClick(index)}
                >
                  <h2
                    className="text-lg font-medium tablet:w-11/12"
                    style={{ fontWeight: "600" }}
                  >
                    {faq?.question}
                  </h2>

                  <div className="w-[3rem] h-auto text-center">
                    {activeIndex === index ? (
                      <MdKeyboardArrowDown
                        className="mobileS:hidden mobileM:hidden text-xl"
                        size={25}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        className="mobileS:hidden mobileM:hidden"
                        size={25}
                      />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div>
                    <hr className="mobileS:hidden mobileM:hidden"
                      style={{ borderColor: "#000", margin: "0px 14px 14px" }}
                    ></hr>
                    <div className="tablet:px-3 mobileS:pt-2 mobileM:pt-2">
                      {faq?.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};
