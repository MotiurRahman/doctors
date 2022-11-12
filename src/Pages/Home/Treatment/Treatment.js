import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row lg:p-10">
        <img
          src={treatment}
          alt="treatment"
          style={{ height: "567px" }}
          className="rounded-lg w-full shadow-2xl"
        />
        <div className="text-left p-2">
          <h1 className="text-5xl font-bold text-left">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary w-auto text-white bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
