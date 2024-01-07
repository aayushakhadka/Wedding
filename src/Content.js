import React from "react";
import { ApiDataProvider } from "./components/ApiDataProvider";
import { Home } from "./components/Home";
import { Nav } from "./common/Nav";
import Countdown from "./components/Countdown";
import { Event } from "./components/Event";
import { People } from "./components/People";
import { Gallery } from "./components/Gallery";
import { Rsvp } from "./components/Rsvp";
import { Footer } from "./components/Footer";
import { Faqs } from "./components/Faqs";
import { Contact } from "./components/Contact";

const Content = () => {
  return (
    <ApiDataProvider>
      <div className="bg-gray-200">
        <Home />
        <Nav />
        {/* <Couple /> */}
        <Countdown />
        {/* <Story /> */}
        <Event />
        <People />
        <Gallery />
        <Faqs />
        <Rsvp />
        <Contact />
        <Footer />
      </div>
    </ApiDataProvider>
  );
};

export default Content;
