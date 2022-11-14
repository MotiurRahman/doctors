import React from "react";
import BookingModal from "./BookingModal/BookingModal";

const AppointmentItems = ({ option, setTreatment }) => {
  const { _id, name, slots } = option;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-secondary font-semibold text-2xl">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>{slots.length} spaces available</p>
          <div className="card-actions justify-center">
            {/* <button className="btn btn-primary text-white   ">
              Book Appioment
            </button> */}
            <label
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              onClick={() => setTreatment(option)}
              className="btn btn-primary text-white"
            >
              open modal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentItems;
