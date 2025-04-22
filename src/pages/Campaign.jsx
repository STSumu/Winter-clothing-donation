import React, { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import 'animate.css'

const Campaign = () => {
    const [campaigns,setCampaigns]=useState([]);
    useEffect(()=>{
          fetch('/data/campaigns.json')
          .then(res=>res.json())
          .then(data=>setCampaigns(data))
    },[])
  return (
    <div className="text-center pt-30 md:pt-40 container mx-auto px-4 lg:px-12">
      <h2 className="text-3xl md:text-4xl text-[#d9662c] font-semibold animate__animated animate__slideInLeft">
        Donation Campaign
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 md:my-16">
          {
            campaigns.map((campaign)=><CampaignCard campaign={campaign} key={campaign.id}></CampaignCard>)
          }
      </div>
    </div>
  );
};

export default Campaign;
