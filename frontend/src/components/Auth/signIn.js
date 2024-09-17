import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import authService from '../../services/Auth/authService';
import { toast } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google'
import GoogleSignin from './googleSignin';
import imageConfig from '../../assets/images';


const SignIn = () => {

    const [emailId, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [checkValidation, setCheckValidation] = useState(false)

    const GoogleAuthWrapper = () => {
        return (
            <GoogleOAuthProvider clientId='884820764775-ie7h62q1cbvjp0ebpmblqarc690k6gj1.apps.googleusercontent.com'>
                <GoogleSignin authType="signin"/>
            </GoogleOAuthProvider>
        )
    }
    const enlarged = {
        backgroundImage: `url(${imageConfig.loginEnlarged})`,
        height: "100vh",
        width: "300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const onSignIn = async (e) => {
        try {
            e.preventDefault();

            if (emailId && password) {
                const response = await authService.signin({ emailId, password })
                if (response) {
                }
            }
            else {
                setCheckValidation(true)
            }


        } catch (err) {
            console.error("error---", err)
            toast.error(err?.response?.data?.error);
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-400 relative z-10'>
         <div style={enlarged} className='absolute -z-99 left-72'/>

            <div className='signup-container  p-12 bg-white' style={{width: "28rem"}}>
                <div className="signup-header text-left mb-6">
                    <div className='logo text-xl font-bold'>10X</div>
                    <h3 className='text-3xl font-bold text-gray-800'>Log In</h3>

                </div>

                <div className='text-left mb-2 text-red-500'>{checkValidation && "Enter required details below"}</div>

                <form className="text-left" onSubmit={onSignIn}>

                    <div className="flex flex-col mb-4">
                        <label className="form-label" htmlFor="email">Email*</label>
                        <input type="email" className="form-label form-control p-1.5 border border-black" name='email'
                            onChange={(e) => setEmailId(e.target.value)} style={{ border: '1px solid #dbd7d7' }} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="form-label" htmlFor="password">Password*</label>
                        <input type="password" className="form-label form-control p-1.5 border border-black" name='password'
                            onChange={(e) => setPassword(e.target.value)} style={{ border: '1px solid #dbd7d7' }} />
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-black from-0% via-blue-900 via-45%  to-blue-800 to-55% mt-4 p-1 text-center text-white">
                        Log In</button>

                    <GoogleAuthWrapper />                   

                </form>
                <div className="text-center text-lg-start pt-4"><Link to="/register" className="link-danger underline">Forgot your password?</Link></div>
                <div className="text-center text-lg-start pt-2 ">
                    <p className="small fw-bold pt-1 mb-0">Don't have an account? <Link to="/register"
                        className="link-danger underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn 