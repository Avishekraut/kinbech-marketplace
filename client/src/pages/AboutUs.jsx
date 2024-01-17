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
            Our story<br></br> begins with{" "}
            <span className="text-4xl font-bold text-[#14ae5c]">you</span>
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
      <div className="gap-4 mt-6 border-gray-400 rounded-lg p-6 bg-[#fafafa]">
        <h1 className="font-bold mb-3 text-xl">
          Frequently Asked Questions (FAQs)
        </h1>
        <h1 className="font-semibold">What Benefits do I get as a member?</h1>
        <div className="mt-2">
          <li>24/7 market place for your products and services.</li>
          <li>
            Online catalog for your product reaching to consumer effectively.
          </li>
          <li>
            Your own control panel. From where you have total control over ads.
          </li>
          <li>
            Add, edit & delete your ads immediately with minimum time and
            effort.
          </li>
          <li>
            Add, edit & delete your ads immediately with minimum time and
            effort.
          </li>
          <li>
            View ad traffic and hits to know how your products affect the
            customers.
          </li>
          <li>
            Upload image for your ad to provide visual information for your ads.
          </li>
          <li>
            Bidding feature where buyers and sellers can openly negotiate prices
            before finalizing a deal.
          </li>
        </div>
        <h1 className="font-semibold"> How can I register in the site?</h1>
        <div className="mt-2">
          If you want to promote your product/service then you just have to
          register as member at hamrobazar first. Just click on Register link at
          top of the website to get started. Fill in your contact details
          mentioned in online registration form and submit.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
