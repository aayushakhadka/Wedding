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
    <div id="faqs">
      <Layout style={{ height: "fit-content" }}>
        <div className="flex items-center justify-center pt-[6rem] ">
        <h1 className="font-display text-xl flex items-center justify-center w-[15rem] border-gray-400 border-[1px] h-[3.5rem]">FAQS</h1>
      </div>
        <div className="pt-[3rem]">
          {faqData?.map((faq, index) => (
            <div className="flex flex-col gap-2 font-display">
              <div key={index} className=" rounded mb-2 p-3 border-[1px] border-gray-400" >
                <div
                  className="flex justify-between items-center px-3 p-3 pt-4"
                  onClick={() => handleClick(index)}
                >
                  <h2 className="text-lg font-medium">{faq?.question}</h2>

                  {activeIndex === index ? (
                    <MdKeyboardArrowDown size={25} />
                  ) : (
                    <MdKeyboardArrowUp size={25} />
                  )}
                </div>
                {activeIndex === index && (
                  <div className="px-3">{faq?.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};
