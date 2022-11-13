import React from "react";
import appioment from "../../../assets/images/appointment.png";
const ContactUS = () => {
  return (
    <div>
      <section
        style={{ background: `url(${appioment})` }}
        className="text-white"
      >
        <div className="py-10">
          <h1 className="text-primary">Contact Us</h1>
          <p className="text-3xl">Stay connected with us</p>
          <div className="flex flex-col items-center mt-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered my-2 md:w-2/6 w-11/12"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered my-2 md:w-2/6 w-11/12"
            />
            <textarea
              className="textarea textarea-bordered my-2 md:w-2/6 w-11/12"
              placeholder="Bio"
            ></textarea>

            <button className="btn btn-primary text-white my-2"> Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;
