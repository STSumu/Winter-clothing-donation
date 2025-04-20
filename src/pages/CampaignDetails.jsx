import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import bg from "../assets/detail.png";
import { IoLocationSharp } from "react-icons/io5";

const CampaignDetails = () => {
  const campaigns = useLoaderData();
  const param = useParams();
  const campaign = campaigns.find(
    (campaign) => campaign.id === Number(param.id)
  );
  
  const handleSubmit=(e)=>{
       e.preventDefault();
       e.target.reset();
  }
  const { title, id, image, description, division, status, contactInfo } = campaign;

    return (
        <div className="pt-20 flex flex-col min-h-screen bg-purple-300/10 px-2 md:px-20">
            
          <div className="p-4 md:p-8 container mx-auto w-full flex flex-col md:flex-row-reverse justify-between space-y-5 bg-white  rounded-xl mt-10 ">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full md:w-1/2 max-h-[600px] object-cover border-4 border-white shadow-md"
            />
    
            <div className="space-y-6 flex flex-col md:p-5 ">
            <h2 className="text-3xl md:text-4xl text-[#d9662c] font-semibold mb-10">
              {title}
            </h2>
    
            <p className="text-lg text-gray-700">{description}</p>
    
            <label className="text-lg flex items-center gap-2 text-green-700">
              <IoLocationSharp className="text-xl" />
              <span className="text-gray-800">{division}</span>
            </label>
    
            <p>
              <span className="font-semibold text-gray-500">Status: </span>
              <span
                className={`rounded-3xl px-2 py-1 text-sm font-medium ${
                  status === "Active"
                    ? "text-green-800 bg-green-100"
                    : status === "Upcoming"
                    ? "text-orange-500 bg-orange-100"
                    : "text-red-600 bg-red-100"
                }`}
              >
                {status}
              </span>
            </p>
    
            <p>
              <span className="font-semibold text-gray-500">Email: </span>
              <Link className="text-blue-500 underline hover:text-blue-700">
                {contactInfo.split("|")[0]}
              </Link>
            </p>
    
            <p>
              <span className="font-semibold text-gray-500">Phone Number: </span>
              <span className="text-gray-800">{contactInfo.split("|")[1]}</span>
            </p>
    
            </div>
            
          </div>
    {/* Donation Form */}
   <div className="container mx-auto bg-white my-10 rounded-lg p-4 md:p-8 flex justify-between">
   <form onSubmit={handleSubmit} className="space-y-4 pt-6 w-1/2">
              <h3 className="text-2xl font-semibold text-[#d9662c]">
                Donation Form
              </h3>
    
              <div>
                <label className="block text-gray-600 font-medium">Quantity of Items</label>
                <input
                  type="number"
                  name="quantity" 
                  required
                  placeholder="e.g. 3"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
    
              <div>
                <label className="block text-gray-600 font-medium">Item Type</label>
                <input
                  type="text"
                  name="itemType"
                  required
                  placeholder="e.g. Blanket, Jacket"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
    
              <div>
                <label className="block text-gray-600 font-medium">Pickup Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
    
              <div>
                <label className="block text-gray-600 font-medium">Additional Notes (optional)</label>
                <textarea
                  name="notes"
                  placeholder="Any special instructions..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
    
              <button
                type="submit"
                className="bg-[#d9662c] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all"
              >
                Submit Donation
              </button>
            </form>
            <img
              src={bg}
              alt="Decoration"
               className="hidden w-1/3 md:flex
               items-center object-contain opacity-70"
            />
   </div>
          </div>

      );
    };
    
    export default CampaignDetails;
