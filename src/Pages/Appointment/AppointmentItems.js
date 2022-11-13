import React from "react";

const AppointmentItems = ({ option }) => {
  const { _id, name, slots } = option;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-secondary font-semibold text-2xl">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>{slots.length} spaces available</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary text-white   ">
              Book Appioment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentItems;
