import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import vol1 from "../assets/Vol1.webp";
import vol2 from "../assets/Vol2.jpg";
import vol3 from "../assets/Vol3.webp";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <div className="flex flex-col my-20 items-center justify-center">
      <div className=" space-y-2 mb-5">
        <h1 className="text-3xl md:text-4xl text-[#d9662c] border-l-[#d9662c] border-l-4 font-semibold pl-2" data-aos='fade-right'>
          Team
        </h1>
        <p data-aos='fade-left' className='text-[#254E70] text-lg font-medium'>
          Meet Our Members
        </p>
      </div>
      <div className="grid grid-cols-1 md:flex md:justify-center md:flex-wrap lg:grid-cols-3 gap-10">
        <div className="border border-[#254E70]/20 shadow-[#254E70] shadow px-20 py-8 rounded-3xl " data-aos='fade-up'>
          <img
            src={vol2}
            alt=""
            className="mb-3 rounded-full w-40 h-40 object-cover p-2 border border-orange-400 shadow-amber-700 shadow-md"
          />
          <h3 className="text-xl font-semibold text-center">Fatima Akter</h3>
          <p className="text-md text-gray-700 text-center">Project Manager</p>
          <div className="flex justify-center *:text-2xl opacity-70 gap-3 mt-3">
            <Link><FaFacebook></FaFacebook></Link>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
        </div>
        <div className="border border-[#254E70]/20 shadow-[#254E70] shadow px-20 py-8 rounded-3xl" data-aos='fade-up'>
          <img
            src={vol1}
            alt=""
            className="mb-3 rounded-full w-40 h-40 object-cover p-2 border border-orange-400 shadow-amber-700 shadow-md"
          />
          <h3 className="text-xl font-semibold text-center">Julie</h3>
          <p className="text-md text-gray-700 text-center">Volunteer Coordinator</p>
          <div className="flex justify-center *:text-2xl opacity-70 gap-3 mt-3">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
        </div>
        <div className="border border-[#254E70]/20 shadow-[#254E70] shadow px-20 py-8 rounded-3xl" data-aos='fade-up'>
          <img
            src={vol3}
            alt=""
            className="mb-3 rounded-full w-40 h-40 object-cover p-2 border border-orange-400 shadow-amber-700 shadow-md"
          />
          <h3 className="text-xl font-semibold text-center">Farhan Asif</h3>
          <p className="text-md text-gray-700 text-center">Fund Raiser</p>
          <div className="flex justify-center *:text-2xl opacity-70 gap-3 mt-3">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
