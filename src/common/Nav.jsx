import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { FaGripLines } from "react-icons/fa";
import { MdOutlineStart } from "react-icons/md";

export const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      {" "}
      <div className=" sticky top-0 z-[1000] bg-gray-100 mobileS:hidden mobileM:hidden">
        <Layout style={{ height: "fit-content" }}>
          <div className="flex items-center justify-between ">
            <img
              className="h-[5rem]"
              src="https://img.freepik.com/free-vector/just-married-couple-dancing-avatars-characters_24877-50491.jpg?"
            />
            <div className=" flex gap-4 ">
              <a href={"#home"}>
                <h1 className=" font-display">HOME</h1>
              </a>
              {/* <a href={"#couple"}>
            <h1 className=" font-display">
              COUPLE
            </h1>
          </a> */}

              {/* <a href={"#story"}>
          <h1 className=" font-display">
            STORY
          </h1>
          </a> */}

              <a href={"#event"}>
                <h1 className=" font-display">EVENTS</h1>
              </a>

              {/* <a href={"#people"}>
          <h1 className=" font-display">
            PEOPLE
          </h1>
          </a> */}
           
           <a href={"#contact"}>
                <h1 className=" font-display">CONTACT</h1>
              </a>
              <a href={"#gallery"}>
                <h1 className=" font-display">GALLERY</h1>
              </a>
              
              <a href={"#faqs"}>
                <h1 className=" font-display">FAQS</h1>
              </a>

              <a href={"#rsvp"}>
                <h1 className=" font-display">RSVP</h1>
              </a>

            </div>
          </div>
        </Layout>

        <div className="w-[100%] h-[5px] border-2 color-black"></div>
      </div>
      <div className="tablet:hidden sticky top-0 z-[1000] bg-gray-100 h-[4rem] flex justify-around ">
        <img
          className="h-[4rem]"
          src="https://img.freepik.com/free-vector/just-married-couple-dancing-avatars-characters_24877-50491.jpg?"
        />
        <React.Fragment>
          <button onClick={openDrawer}>
            <FaGripLines />
          </button>
          <Drawer open={open} onClose={closeDrawer} className="p-4">
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color=""></Typography>
              <IconButton variant="text" color="black" onClick={closeDrawer}>
                <MdOutlineStart className="h-[2rem] w-[2rem]" />
              </IconButton>
            </div>
            <Typography
              color="black"
              className="mb-8 pr-4 font-normal flex flex-col items-center gap-5 justify-center"
            >
              <a href={"#home"}>
                <h1 className=" font-display">HOME</h1>
              </a>
              {/* <a href={"#couple"}>
                <h1 className=" font-display">COUPLE</h1>
              </a> */}

              {/* <a href={"#story"}>
                <h1 className=" font-display">STORY</h1>
              </a> */}

              <a href={"#event"}>
                <h1 className=" font-display">EVENTS</h1>
              </a>

              <a href={"#contact"}>
                <h1 className=" font-display">CONTACT</h1>
              </a>
              {/* <a href={"#people"}>
                <h1 className=" font-display">PEOPLE</h1>
              </a> */}

              <a href={"#gallery"}>
                <h1 className=" font-display">GALLERY</h1>
              </a>

              <a href={"#faqs"}>
                <h1 className=" font-display">FAQS</h1>
              </a>

              <a href={"#rsvp"}>
                <h1 className=" font-display">RSVP</h1>
              </a>
             
            </Typography>
          </Drawer>
        </React.Fragment>
      </div>
      <div className="w-[100%] h-[2px] border-2 color-black"></div>
    </>
  );
};
