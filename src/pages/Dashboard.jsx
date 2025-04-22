import React, { useContext, useState } from "react";
import bg from "../assets/snow1.svg";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user ,updateUserProfile} = useContext(AuthContext);
  const { photoURL, displayName, email } = user;
  const [update,setUpdate]=useState(false);
  const handleUpdate=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const profile={
      photoURL:photo,
      displayName:name,
    }
    updateUserProfile(profile)
    .then(()=>{
         toast('Successfully updated the profile.');
         setUpdate(false);
    })
    .catch(()=>{
      alert('Could not update the profile.')
    })
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header
        className="h-[300px] md:h-[400px] flex gap-0 bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></header>
      <section className="flex-grow flex justify-center bg-blue-400/10 p-5">
        <div className="w-11/12 md:w-1/2 absolute top-60 md:top-80 p-8 bg-white rounded-lg shadow-[#254E70]/50 shadow-2xl flex flex-col items-center">
          <img
            src={photoURL}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-md -mt-16 z-10"
            alt="Profile"
          />

          <div className={`text-center px-6 w-full border border-[#d9542c] rounded-lg p-6 ${update && 'hidden'}`}>
            <h2 className="text-2xl font-semibold text-[#254E70]">
              {displayName ? displayName : 'Username'}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">{email}</p>
            <button onClick={()=>setUpdate(true)} className="btn text-white bg-[#d9542c] mt-6 px-6 py-2 rounded hover:bg-[#c2441f] transition">
              Update Profile
            </button>
          </div>
          <form onSubmit={handleUpdate} className={`fieldset  border-orange-500/50 rounded-box w-xs border p-4 ${!update && 'hidden'}`}>
  

  <label className="label">Name</label>
  <input type="text" name='name' className="input" placeholder="Your Name" />

  <label className="label">Photo URL</label>
  <input type="text" name='photo' className="input" placeholder="Photo url" />

  <button className="btn text-white bg-[#d9542c] mt-6 px-6 py-2 rounded hover:bg-[#c2441f] transition">
              Update Information
            </button>
</form>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
