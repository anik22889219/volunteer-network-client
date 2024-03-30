import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';




const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const  location = useLocation();
    const navigate =useNavigate();
    const from = location.state?.from?.pathname || '/'; 



    if (loading) {
        return <p>Loading...</p>;
      }
    if (user) {
        navigate(from,{replace: true})
      }
    return (
        <div className='w-[570px] h-[457px] bg-slate-100 flex justify-center items-center flex-col mx-auto mt-8'>
            <h1 className='font-bold text-2xl mb-6'>Login With</h1>
            <button onClick={()=>signInWithGoogle()} className='flex items-center border-2 w-[457px] h-[51] rounded-3xl p-1'>
                <FcGoogle className='size-7'/>
                {/* <input className='text-sm mx-auto font-semibold' type="submit" value="Contineu with google" /> */}
                <p className='text-sm mx-auto font-semibold'>Contineu with google</p>
            </button>
            <small className='font-semibold'>Don’t have an account? <Link to="/register"><span className='text-blue-500 underline'>Create an account</span></Link></small>
        </div>
        
    );
};

export default Login;