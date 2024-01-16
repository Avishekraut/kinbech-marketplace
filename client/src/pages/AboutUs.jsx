import React from "react";
import ProtectedPage from "../components/ProtectedPage";
import Navbar from "../components/Navbar";
import aboutimg from "../images/about-page-img.jpg";

const AboutUs = () => {
  return (
    <div>
      {localStorage.getItem("token") ? <ProtectedPage /> : <Navbar />}
      <div className="flex gap-4 mt-4">
        <div className="w-1/2  border-gray-400 rounded-lg p-6 bg-[#fafafa]">
          <h1 className="text-4xl font-bold mb-2 leading-tight">
            Our story<br></br> begins with <span className="text-4xl font-bold text-[#14ae5c]">you</span>
          </h1>
          <p className="text-justify">
            Kinbech is all about you - Our aim is to empower every person in the
            country to independently connect with buyers and sellers online.
            Kinbech aims to become India’s no. 1 online classifieds platform -
            and there’s a reason behind that. We care about you - and the
            transactions that bring you closer to your dreams. Want to buy your
            first car? We’re here for you. Want to sell commercial property to
            buy a home for your family? We’re here for you. Whatever job you’ve
            got, we promise to get it done.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={aboutimg}
            alt="About us image"
            className="w-10/12 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
