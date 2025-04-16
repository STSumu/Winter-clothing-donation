import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, setUser,loginWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    const passValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passValidation.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast("Account Successfully Registered.");
        updateUserProfile(profile)
        .then(()=>{
           e.target.reset();
        })
        .catch((err)=>{
            setError(err.message);
            console.log(err.message);
        })
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  
  const handleGoogleLogin=()=>{
    loginWithGoogle()
    .then((result)=>{
      setUser(result.user);
    })
    .catch((err)=>{
      setError(err.message);
    })
  }
  return (
    <div className="flex justify-center items-center p-4">
      <div className="card bg-base-100 w-full md:w-1/2 lg:w-1/3 my-12 shrink-0 shadow-2xl shadow-[#254E70] p-10">
        <h1 className="text-3xl font-semibold text-center text-[#d9542c] mb-4">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="fieldset *:w-full my-2">
          <label className="fieldset-label font-semibold text-lg">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="fieldset-label font-semibold text-lg">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="fieldset-label font-semibold text-lg">
            Photo-URL
          </label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo-URL"
          />
          <label className="fieldset-label font-semibold text-lg">
            Password
          </label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name='password'
              className="input w-full"
              placeholder="Password"
            />
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
            Register
          </button>
        </form>
        <p className="text-sm opacity-70">
          Already have an account?
          <Link to="/auth/login" className="text-red-600">
            Login.
          </Link>
        </p>
        <button onClick={handleGoogleLogin} className="btn  bg-white shadow-none border border-[#d9542c] text-[#d9542c] mt-4">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
