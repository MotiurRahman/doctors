import React from "react";

import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import LandingPage from "./LandingPage";

const landingPage = [
  {
    id: 1,
    name: "Opening Hours!",
    desc: "Lorem Ipsum is simply dummy text of the pri",
    icon: clock,
    bgClass: "bg-gradient-to-r from-primary to-secondary",
  },
  {
    id: 2,
    name: "Visit our location!",
    desc: "Brooklyn, NY 10036, United States",
    icon: marker,
    bgClass: "bg-accent ",
  },
  {
    id: 3,  
    name: "Contact us now!",
    desc: "+8801723306519",
    icon: phone,
    bgClass: "bg-gradient-to-r from-primary to-secondary",
  },
];

const LandingPages = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-20 text-white p-4">
      {landingPage.map((page) => (
        <LandingPage key={page.id} page={page}></LandingPage>
      ))}
    </div>
  );
};

export default LandingPages;
