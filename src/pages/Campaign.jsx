import React, { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";

const Campaign = () => {
    const [campaigns,setCampaigns]=useState([]);
    useEffect(()=>{
          fetch('/data/campaigns.json')
          .then(res=>res.json())
          .then(data=>setCampaigns(data))
    },[])
    console.log(campaigns);
  return (
    <div className="text-center pt-40 container mx-auto px-2 lg:px-12">
      <h2 className="text-4xl text-[#d9662c] font-semibold ">
        Donation Campaign
      </h2>
      <div className="grid grid-cols-3 gap-5 my-16">
          {
            campaigns.map((campaign)=><CampaignCard campaign={campaign} key={campaign.id}></CampaignCard>)
          }
      </div>
    </div>
  );
};

export default Campaign;
