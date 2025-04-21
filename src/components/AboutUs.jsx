import React from "react";
import img1 from "../assets/aboutImg/about1.jpeg";
import img2 from "../assets/aboutImg/about2.webp";
import img3 from "../assets/aboutImg/about3.jpg";
import img4 from "../assets/aboutImg/about4.jpg";
import img5 from "../assets/aboutImg/about5.jpg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center gap-10 my-20 items-center lg:px-14">
      <div className=" space-y-2 mb-5">
        <h1 className="text-3xl md:text-4xl text-[#d9662c] border-l-[#d9662c] border-l-4 font-semibold pl-2" data-aos='fade-right'>
          About Us
        </h1>
        <p data-aos='fade-left' className='text-[#254E70] text-lg font-medium'>
          Share Warmth Around the Country
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-base md:text-lg opacity-80 leading-relaxed mb-5" data-aos='fade-left'>
            Every winter, countless people across Bangladesh suffer in the cold.
            We believe warmth shouldn't be a privilege — it should be a right.
            <br /><br />
            Our mission is simple: to provide that right to everyone. Whether
            it’s a gently used sweater or a thick blanket, your small act of
            kindness can bring comfort to someone this winter. 
            <br /><br />
            Together, let’s share warmth — one jacket, one home, one smile at a time.
          </p>
          {/* card container  */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            {/* Card 1 */}
            <div className="card flex-1 bg-base-100 shadow-md " data-aos="fade-up">
              <div className="card-body p-4">
                <IoMdPerson className="text-3xl text-orange-500 bg-orange-100 p-2 rounded-full w-10 h-10" />
                <h2 className="card-title text-[#254E70]">Become a Volunteer</h2>
                <p className="opacity-50">Help us deliver warmth by volunteering in your community.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card flex-1 bg-base-100 shadow-md" data-aos="fade-up">
              <div className="card-body p-4">
                <BiSolidDonateHeart className="text-3xl text-[#254E70] bg-blue-100 p-2 rounded-full w-10 h-10" />
                <h2 className="card-title text-[#254E70]">Donate Now</h2>
                <p className="opacity-50">Your donations make a real difference for those in need.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Collage */}
        <div className="w-full md:w-1/2 grid h-[500px] grid-cols-6 grid-rows-6 gap-2 px-3 md:px-0" data-aos='fade-left'>
          <img src={img1} className="col-span-3 row-span-4 object-cover w-full h-full rounded-xl shadow-md rotate-[-2deg]" alt="" />
          <img src={img2} className="col-span-3 row-span-3 object-cover w-full h-full rounded-xl shadow-md translate-y-3 z-10" alt="" />
          <img src={img3} className="col-span-3 row-span-2 object-cover w-full h-full rounded-xl shadow-md brightness-90" alt="" />
          <img src={img4} className="col-span-3 row-span-2 object-cover w-full h-full rounded-xl shadow-md scale-105" alt="" />
          <img src={img5} className="col-span-3 row-span-3 object-cover w-full h-full rounded-xl shadow-md -translate-y-2 rotate-1" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
