import React from "react";
import doctors from "../../../assets/images/doctor.png";
import appioment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Appointment = () => {
  const bgImg = {
    backgroundImage: `url(${appioment})`,
  };
  return (
    <div>
      <section className="mt-20">
        <div className="hero" style={bgImg}>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctors}
              className="max-w-sm rounded-lg shadow-2xl -mt-32 hidden md:block"
              alt=""
            />
            <div className="text-left text-white">
              <h1 className="text-primary">Appointment</h1>
              <h1 className="text-3xl font-bold">Make an appointment Today</h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <PrimaryButton>Appointment</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
