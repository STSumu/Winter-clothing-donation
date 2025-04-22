import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation} from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPass = () => {
    const { resetPassword }=useContext(AuthContext);
    const [error,setError]=useState();
    const [email,setEmail]=useState();
    const location = useLocation();
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    const handleForgetPassword=(e)=>{
        e.preventDefault();
        setEmail(e.target.email.value);
        if(!email){
           setError("Enter a valid email.");
           return;
        }
        else{
          resetPassword(email)
          .then(()=>{
            toast('Password reset email sent');
            window.location.href = 'https://mail.google.com/mail/u/0/#inbox';          })
          .catch((err)=>{
            setError(err.message);
          })
        }
            // 
      };
    return (
        <div className="flex justify-center items-center p-4">
        <div className="card bg-base-100 w-ful lg:w-1/3 mt-24 shrink-0 shadow-2xl shadow-[#254E70] p-10">
          <h1 className="text-3xl font-semibold text-center text-[#d9542c] mb-4">
            Login your account
          </h1>
          <form onSubmit={handleForgetPassword} className="fieldset *:w-full my-2">
            <label className="fieldset-label font-semibold text-lg">Email</label>
            <input 
                        type="email" 
                        name="email" 
                        className="input" 
                        placeholder="Email" 
                        value={email}
                        required
                    />
            <button className="btn  text-white shadow-none border-0 bg-[#d9542c] mt-4">
              Reset Password
            </button>
          </form>          
          {
            error && <p className="text-red-600 text-xs mt-2">{error}</p>
          }
        </div>
      </div>
    );
};

export default ForgetPass;