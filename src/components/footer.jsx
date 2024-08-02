import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <section className="bg-[#038C7F] p-12 text-center relative">
      <div className="mb-10">
        <h2 className="text-[#f8f6f7] text-lg">Want to know about our offers first?</h2>
        <h1 className="text-white text-4xl my-4">Subscribe to our newsletter</h1>
        <form className="flex justify-center my-5">
          <input
            type="email"
            placeholder="Your email ..."
            className="p-2 w-72 border-none rounded-l-md outline-none text-base"
            required
          />
          <button
            type="submit"
            className="p-2 bg-[#123834] text-white text-base rounded-r-md cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 text-white">
        <div className="flex flex-col items-center">
          <Phone className="text-[#f8f6f7] mb-2" size={30} />
          <p className="text-base">(054) -321-8905<br /><span>Contact</span></p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="text-[#f8f6f7] mb-2" size={30} />
          <p className="text-base">419 East Legon St. Escalator,<br />GA-641-06</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="text-[#f8f6f7] mb-2" size={30} />
          <p className="text-base">info@stevejnr.com<br />support@audacity.com</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="text-[#f8f6f7] mb-2" size={30} />
          <p className="text-base">Monday-Saturday: 07:00AM - 22:00PM<br />Sunday: 07:00 AM - 16:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
