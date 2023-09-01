import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-conatiner">
      <div className="contact-section">
        <h2>KinBech</h2>
        <p className="contact contact-text">Got Question? Call us on</p>
        <p className="contact contact-number">+977-9841446187</p>
        <p className="contact contact-email">info@kinbech.com</p>
        <p className="contact contact-address">Kupondole, Lalitpur</p>
      </div>
      <div className="links">
        <div className="company-section">
          <h2>Company</h2>
          <p className="company">About Us</p>
          <p className="company">Contact Us</p>
          <p className="company">Advertise With Us</p>
        </div>
        <div className="categories-section">
          <h2>Category</h2>
          <p className="company ">Mobile Phone</p>
          <p className="company ">Laptop</p>
          <p className="company ">Motorcyle</p>
          <p className="company ">Car</p>
          <p className="company ">Gaming</p>
          <p className="company ">Home Appliance</p>
        </div>
        <div className="categories-section">
          <h2>Follow Us</h2>
          <BsFacebook className="social" size={22} />
          <BsInstagram className="social" size={22} />
          <BsTwitter className="social" size={22} />
          <BsLinkedin className="social" size={22} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
