import React from "react";
import map from "../assets/howImg/map1.png";

const HowItWorks = () => {
  const points = [
    {
      district: "Dhaka",
      point: "House 12, Road 4, Dhanmondi",
    },
    {
      district: "Chattogram",
      point: "GEC Circle, Opposite to Afmi Plaza",
    },
    {
      district: "Rajshahi",
      point: "New Market Gate",
    },
    {
      district: "Khulna",
      point: "Boyra Main Road, near Khulna University",
    },
    {
      district: "Sylhet",
      point: "Zindabazar Point, Opp. Shukria Market",
    },
    {
      district: "Barishal",
      point: "BM College Gate, South Side",
    },
    {
      district: "Rangpur",
      point: "Jahaj Company Mor, beside Desco Office",
    },
    {
      district: "Mymensingh",
      point: "Town Hall Area",
    },
  ];
  const steps=["Sign in to your account", 
    "Go to donation page", 
    "Select the donation campaign", 
    "Fill up the form with information"
  ];

  return (
    <div className="flex flex-col my-20 items-center justify-center">
      <div className=" space-y-2 mb-5">
        <h1
          className="text-3xl md:text-4xl text-[#d9662c] border-l-[#d9662c] border-l-4 font-semibold pl-2"
          data-aos="fade-right"
        >
          How It Works
        </h1>
        <p data-aos="fade-left" className="text-[#254E70] text-lg font-medium">
        Simple steps. Big impact.
        </p>
      </div>
      <div className="mb-10 text-center">
        <h4 className="text-2xl text-[#254E70]/80 font-semibold mb-3" data-aos='fade-up'>
          How to Donate?
        </h4>
        <ul className="text-lg opacity-80 list-disc list-inside mb-2">
          {
            steps.map((step,idx)=>(<li data-aos="fade-left" data-aos-delay={idx*200} data-aos-duration="200">{step}</li>))
          }
        </ul>
        <p className="text-[#d9662c] my-3">
          One of our volunteer will contact with you shortly.
        </p>
        <p className="italic text-xs">Note: We accept used or unused clothes.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center my-10">
        <div>
          <h4 className="text-2xl text-[#254E70]/70 font-semibold my-5">
            Collection Points
          </h4>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            {points.map((location, idx) => (
              <div key={idx} data-aos='fade-left' data-aos-duration="300" data-aos-delay={idx*200} className="alert alert-success gap-0 text-base md:text-lg bg-green-50 text-green-800 shadow-sm rounded-md">
                <span>{location.point},<strong>{location.district}</strong></span>
              </div>
            ))}
          </div>
        </div>
        {/* supported division */}
        <div className="w-full md:w-1/2">
          <img data-aos='fade-up' src={map} className="w-full object-cover" alt="" />
          <p data-aos='fade-right' data-aos-delay="300" className="lg:text-lg text-orange-800/50 my-0 text-center">
            We are providing service in All 8 division.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
