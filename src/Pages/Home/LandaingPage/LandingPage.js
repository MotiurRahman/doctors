import React from "react";

const LandingPage = ({ page }) => {
  const { id, name, desc, icon, bgClass } = page;
  return (
    <div className={`card card-side shadow-xl ${bgClass} p-5`}>
      <figure>
        <img src={icon} alt="clock" />
      </figure>
      <div className="card-body my-auto">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">{desc}</p>
      </div>
    </div>
  );
};

export default LandingPage;
