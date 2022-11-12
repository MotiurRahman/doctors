import React from "react";

const Service = ({ service }) => {
  const { id, title, icon, desc, bgClass } = service;
  return (
    <div className={`card shadow-xl ${bgClass} p-5`}>
      <figure>
        <img src={icon} alt="clock" />
      </figure>
      <div className="card-body my-auto">
        <h2 className="font-semibold">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;
