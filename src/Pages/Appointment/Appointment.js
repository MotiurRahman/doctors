import React, { useEffect, useState } from "react";
import chair from "../../assets/images/chair.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import AppointmentItems from "./AppointmentItems";
import BookingModal from "./BookingModal/BookingModal";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointmentOptions(data);
      });
  }, []);
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="Chair"
            className="w-full md:w-2/5   rounded-lg shadow-2xl"
          />
          <div className="">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
      <section className="my-16">
        <p className="text-primary text-2xl">
          Available Appointments on {format(selected, "PP")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
          {appointmentOptions.map((option) => (
            <AppointmentItems
              key={option._id}
              option={option}
              setTreatment={setTreatment}
            ></AppointmentItems>
          ))}
        </div>
        {treatment && (
          <BookingModal
            selected={selected}
            treatment={treatment}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </section>
    </div>
  );
};

export default Appointment;
