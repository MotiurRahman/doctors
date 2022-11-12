import React from "react";
import Banner from "./Banner/Banner";
import LandingPage from "./LandaingPage/LandingPages";
import Services from "./Services/Services";
import Treatment from "./Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LandingPage></LandingPage>
      <Services></Services>
      <Treatment></Treatment>
    </div>
  );
};

export default Home;
