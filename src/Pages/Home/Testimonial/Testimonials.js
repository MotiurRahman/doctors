import React from "react";
import people from "../../../assets/images/people1.png";
import Testimonial from "./Testimonial";
import quote from "../../../assets/icons/quote.svg";

const Testimonials = () => {
  const persons = [
    {
      id: 1,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      icon: people,
    },
    {
      id: 2,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      icon: people,
    },
    {
      id: 3,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      icon: people,
    },
  ];
  return (
    <div>
      <section>
        <div className="text-left ml-5 my-20 flex justify-between">
          <div>
            <h1 className="text-primary">Testimonial</h1>
            <p className="text-3xl">What Our Patients Says</p>
          </div>
          <div>
            <img className="h-20" src={quote} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {persons.map((people) => (
            <Testimonial key={people.id} people={people}></Testimonial>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
