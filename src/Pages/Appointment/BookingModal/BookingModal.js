import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const dateVal = format(selected, "PP");
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentdate: dateVal,
      treatment: name,
      patient: pName,
      slot,
      email,
      phone,
    };
    console.log(booking);

    // Once data is saved then close the modal
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-left">{name}</h3>
          <form onSubmit={handleBookingSubmit}>
            <input
              type="text"
              disabled
              value={dateVal}
              placeholder="Type here"
              className="input input-bordered w-full my-2"
            />
            <select
              name="slot"
              className="select select-bordered w-full my-2"
              required
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input input-bordered w-full my-2"
            />
            <input
              type="number"
              name="phone"
              required
              placeholder="Enter Number"
              className="input input-bordered w-full my-2"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="input input-bordered w-full my-2"
            />
            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
