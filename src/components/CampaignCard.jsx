import { IoLocationSharp } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const CampaignCard = ({ campaign }) => {
  const { title, image, description, division } = campaign;
  return (
    <div className="card bg-base-100 h-[400px] shadow-sm shadow-[#d9542c] border border-[#d9542c]/30" data-aos='fade-up'>
      <figure className="px-5 pt-5 h-2/3">
        <img src={image} alt="Shoes" className="rounded-xl w-full h-full" />
      </figure>
      <div className="card-body">
      <div className="flex justify-start gap-2 items-center">
        <IoLocationSharp className="text-lg" />
        <label className="text-start">{division}</label>
      </div>
        <h2 className="card-title text-start">{title}</h2>
        <p className="text-start">{description}</p>

        <div className="card-actions">
          <Link
            className="btn text-white shadow-none border-0 bg-[#d9542c]"
            to="/details"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
