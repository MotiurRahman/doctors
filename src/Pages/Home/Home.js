import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import ContactUS from "./ContactUS/ContactUS";
import LandingPage from "./LandaingPage/LandingPages";
import Services from "./Services/Services";
import Testimonials from "./Testimonial/Testimonials";
import Treatment from "./Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LandingPage></LandingPage>
      <Services></Services>
      <Treatment></Treatment>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <ContactUS></ContactUS>
    </div>
  );
};

export default Home;
