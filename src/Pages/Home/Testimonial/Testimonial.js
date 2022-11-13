import React from "react";

const Testimonial = ({ people }) => {
  const { id, desc, name, address, icon } = people;
  return (
    <div className="card w-auto shadow-xl text-left mx-10">
      <div className="card-body">
        <p>{desc}</p>
        <div className="card-actions justify-start">
          <img className="w-11" src={icon} alt="" />
          <div className="my-auto">
            <h1 className="font-semibold">{name}</h1>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
