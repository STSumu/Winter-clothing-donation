import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logofinal.png'

const Navbar = () => {
    const links=<>
       <li>
        <NavLink to='/'>Home</NavLink>
       </li>
       <li>
        <NavLink to='/campaign'>Donation Campaigns</NavLink>
       </li>
       <li>
        <NavLink to='/help'>How to Help</NavLink>
       </li>
       <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
       </li>
    </>
    return (
        <div className="navbar bg-[#254E70] px-5 md:px-16 text-white shadow-sm fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-1 bg-[#254E70]/30 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img className='w-20' src={logo} alt="" />
    <a className="text-lg hidden md:flex">Winter  <br></br> Clothing Donation</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-white shadow-none border-0 bg-[#d9542c]">Donate</a>
  </div>
</div>
    );
};

export default Navbar;