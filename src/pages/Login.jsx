import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
      const [show, setShow] = useState(false);
      const [error,setError]=useState('');
      const emailRef=useRef();
      const {loginUser,setUser,resetPassword,loginWithGoogle}=useContext(AuthContext);
      const location=useLocation();
      const navigate=useNavigate();

      const handleLogin=(e)=>{
            e.preventDefault();
            setError('');
            const email=e.target.email.value;
            const password=e.target.password.value;
            loginUser(email,password)
            .then((result)=>{
                 setUser(result.user);
                 toast('Account successfully logged in.');
                 e.target.reset();
                 location?.state ? navigate(location.state):navigate('/');
            })
            .catch((err)=>{
                 setError(err.message);
            })
      }
      const handleForgetPassword=()=>{
        const email=emailRef.current.value;
        if(!email){
           setError("Enter a valid email.");
           return;
        }
        else{
          resetPassword(emailRef.current.value)
          .then(()=>{
            toast('Password reset email sent');
          })
          .catch((err)=>{
            setError(err.message);
          })
        }
            // 
      };
      const handleGoogleLogin=()=>{
        setError('');
        loginWithGoogle()
        .then((result)=>{
          setUser(result.user);
          location?.state ? navigate(location.state):navigate('/');
        })
        .catch((err)=>{
          setError(err.message);
        }) 

      }
  return (
    <div className="flex justify-center items-center p-4">
      <div className="card bg-base-100 w-ful lg:w-1/3 mt-24 shrink-0 shadow-2xl shadow-[#254E70] p-10">
        <h1 className="text-3xl font-semibold text-center text-[#d9542c] mb-4">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="fieldset *:w-full my-2">
          <label className="fieldset-label font-semibold text-lg">Email</label>
          <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
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
            <a className="link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
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
        <button onClick={handleGoogleLogin} className="btn  bg-white shadow-none border border-[#d9542c] text-[#d9542c] mt-4">
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
