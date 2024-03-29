import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../common/Layout";

export const Contact = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/contact`)
      .then((response) => {
        setContactData(response.data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  console.log(contactData);
  return (
    <div id="contact" className=" bg-blue-gray-100 bg-cover bg-center object-contain">
      <div className="bg-black opacity-80">
      <Layout style={{ height: "fit-content" }}>
        <div className="flex items-center justify-center pt-[6rem]">
          <h1 className="font-display flex items-center justify-center w-[15rem] border-gray-200 border-[1px] h-[3.5rem] text-white">CONTACT</h1>
        </div>
        
        

        <div className=" flex items-center justify-center gap-5 pb-[5rem] mobileS:flex-col mobileM:flex-col pt-[3rem] "
        data-aos='zoom-in'
        data-aos-duration='1500'>
        
          {contactData?.map((contact, index) => (
            
            <div key={index} className="h-[5rem] w-[10rem] bg-gray-200 rounded-[1rem] flex flex-col items-center justify-center shadow-xl leading-7 " 
            >
             
              <h1 className="text-black font-display"
               data-aos='fade-up'
               data-aos-duration='1500'
               >{contact?.name}</h1>
              <h1 className="text-black font-display tracking-wider"
               data-aos='fade-up'
               data-aos-duration='1500'
              >{contact?.phone}</h1>
            </div>
          ))}
        </div>
      </Layout>
      </div>
    </div>
  );
};
