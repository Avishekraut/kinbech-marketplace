import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import qrcode from "../images/qrcode.png";
import playstore from "../images/googleplay-logo.png";
import appstore from "../images/appstore-logo.png";
import Kinbechlogo from "../../src/images/kinbechLogo.png";

const Footer = () => {
  return (
    <div className="footer-conatiner">
      <div className="contact-section">
        <img src={Kinbechlogo} alt="kinbech logo" className="h-10"/>
        <p className="contact contact-text">Got Question? Call us on</p>
        <p className="contact contact-number">+977-9841446187</p>
        <p className="contact contact-email">info@kinbech.com</p>
        <p className="contact contact-address">Kupondole, Lalitpur</p>
      </div>

      <div className="company-section">
        <h2 className="font-medium">Company</h2>
        <p className="company">About Us</p>
        <p className="company">Contact Us</p>
        <p className="company">Advertise With Us</p>
      </div>
      <div className="categories-section">
          <h2 className="font-medium">Category</h2>
          <p className="company ">Mobile Phone</p>
          <p className="company ">Laptop</p>
          <p className="company ">Motorcyle</p>
          <p className="company ">Car</p>
          <p className="company ">Gaming</p>
          <p className="company ">Home Appliance</p>
        </div>
      <div className="categories-section">
        <h2 className="font-medium">Follow Us</h2>
        <div className="icons">
          <BsFacebook className="social" size={22} />
          <BsInstagram className="social" size={22} />
          <BsTwitter className="social" size={22} />
          <BsLinkedin className="social" size={22} />
        </div>
      </div>
      <div className="downloadApp-section">
        <h2 className="font-medium">Download App</h2>
        <div className="store-conatiner">
          <div className="qrcode">
            <img src={qrcode} alt="" className="img1" />
          </div>
          <div className="storeIcon">
            <img src={playstore} alt="" className="img2" />
            <img src={appstore} alt="" className="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
