import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-1/3 mt-24 shrink-0 shadow-2xl shadow-[#254E70] p-10">
            <h1 className='text-3xl font-semibold text-center text-[#d9542c] mb-4'>Login your account</h1>
        <form className="fieldset *:w-full my-2">
          <label className="fieldset-label font-semibold text-lg">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label font-semibold text-lg">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn  text-white shadow-none border-0 bg-[#d9542c] mt-4">Login</button>
        </form>
        <p className='text-sm opacity-70'>Don't have an account?<Link to='/auth/register' className='text-red-600'>Register</Link></p>
        <button className="btn  bg-white shadow-none border border-[#d9542c] text-[#d9542c] mt-4">
           <FaGoogle></FaGoogle> Login with Google</button>
    </div>

        </div>
    );
};

export default Login;