import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
      const [show, setShow] = useState(false);
      const [error,setError]=useState('');
      const handleLogin=(e)=>{
            e.preventDefault();
            setError('');
            const email=e.target.email.value;
            const password=e.target.password.value;
            const passValidation=/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
            if(!passValidation.test(password)){
                setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
                return;
            }
      }
  return (
    <div className="flex justify-center items-center p-4">
      <div className="card bg-base-100 w-ful lg:w-1/3 mt-24 shrink-0 shadow-2xl shadow-[#254E70] p-10">
        <h1 className="text-3xl font-semibold text-center text-[#d9542c] mb-4">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="fieldset *:w-full my-2">
          <label className="fieldset-label font-semibold text-lg">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="fieldset-label font-semibold text-lg">
            Password
          </label>
          <div className="relative">
          <input type={show ? "text" : "password"} name='password' className="input w-full" placeholder="Password" />
          <div
            className="absolute top-1/3 right-4"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </div>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn  text-white shadow-none border-0 bg-[#d9542c] mt-4">
            Login
          </button>
        </form>
        <p className="text-sm opacity-70">
          Don't have an account?
          <Link to="/auth/register" className="text-red-600">
            Register
          </Link>
        </p>
        <button className="btn  bg-white shadow-none border border-[#d9542c] text-[#d9542c] mt-4">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        {
          error && <p className="text-red-600 text-xs mt-2">{error}</p>
        }
      </div>
    </div>
  );
};

export default Login;
