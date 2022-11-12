import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import teeth from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
      bgClass: "base-100",
    },
    {
      id: 2,
      title: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
      bgClass: "base-100",
    },
    {
      id: 3,
      title: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: teeth,
      bgClass: "base-100",
    },
  ];
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-primary font-semibold text-xl uppercase">
          Our Service
        </h1>
        <p className="text-3xl">Service We Provide</p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-20 p-4">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
