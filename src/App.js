import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./common/Nav";
import { Couple } from "./components/Couple";
import { Countdown } from "./components/Countdown";
import { Story } from "./components/Story";
import { Event } from "./components/Event";
import { People } from "./components/People";
import { Gallery } from "./components/Gallery";
import { Rsvp } from "./components/Rsvp";
import { Footer } from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiDataProvider } from "./components/ApiDataProvider";
import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import NotFoundPage from "./components/NotFoundPage";
import Traveldetail from "./Traveldetail";
import Memory from "./Memory";
import AOS from "aos";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); 

  return (
    <Routes>
      <Route path="/:eventId" element={<Content />} />
      <Route path="travel/:eventId" element={<Traveldetail />} />
      <Route path="memories/:eventId" element={<Memory />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
