import React from "react";
import footerImg from "../../assets/images/footer.png";
import appioment from "../../assets/images/appointment.png";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer p-10"
        style={{ background: `url(${footerImg})`, backgroundSize: "100% 100%" }}
      >
        <div className="mx-auto">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer footer-center p-4">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
