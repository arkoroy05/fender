import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#8a1717] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/fenderlogo.png" alt="footer lgo" />
          <p className="text-center lg:text-start"></p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-bold">Company</p>
          <p className="text-base">Careers</p>
          <p className="text-base">About</p>
          <p className="text-base">Support</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-bold">Customer Service</p>
          <p className="text-base">Support</p>
          <p className="text-base">Find a Dealer</p>
          <p className="text-base">Store Policies</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-bold">Account</p>
          <p className="text-base">My Account</p>
          <p className="text-base">Order Status</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-black"/>
                <BsTwitter className="text-3xl text-black"/>
                <BsInstagram className="text-3xl text-black"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
