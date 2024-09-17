import React, { useState } from 'react'
import authService from '../../services/Auth/authService';
import { toast } from 'react-toastify';
import GoogleSignin from './googleSignin';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer';
import imageConfig from '../../assets/images';


const SignUp = () => {
    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({
        userName: "",
        emailId: "",
        password: ""
    })
    const [isValidated, setIsValidated] = useState(false)

    const setUserData = (key, value) => {
        setUserDetails({ ...userDetails, [key]: value })
    }

    const checkValidation = () => {
        if (userDetails.userName === '' || userDetails.userName === null || userDetails.userName === undefined
            || userDetails.emailId === '' || userDetails.emailId === null || userDetails.emailId === undefined
            || userDetails.password === '' || userDetails.password === null || userDetails.password === undefined
        ) {
            setIsValidated(true);
            return false;

        }
        return true;

    }

    const onSignup = async (e) => {
        try {
            e.preventDefault();
            if (checkValidation()) {
                const response = await authService.signup(userDetails)
                if (response.status === 201) {
                    toast.success(response?.data?.msg);
                    setUserDetails({
                        userName: "",
                        emailId: "",
                        password: ""
                    })
                    navigate('/signin')

                }
            }
        } catch (err) {
            console.error("error---", err)
            toast.error(err?.response?.data?.error);
        }

    }

    const GoogleAuthWrapper = () => {
        return (
            <GoogleOAuthProvider clientId='884820764775-ie7h62q1cbvjp0ebpmblqarc690k6gj1.apps.googleusercontent.com'>
                <GoogleSignin authType="signup" />
            </GoogleOAuthProvider>
        )
    }

    const signuEnlarged = {
        backgroundImage: `url(${imageConfig.rectangle})`,       
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className='min-h-screen'>
            <div className='mid-section w-full flex'>
                <div className='w-1/3'>
                    <div className='signup-container w-96 p-12 m-auto'>
                        <div className="signup-header text-left mb-6">
                            <div className='logo text-xl font-bold'>10X</div>
                            <h3 className='text-3xl font-bold text-gray-800'>Sign Up</h3>

                        </div>
                        <div className='text-left mb-2 text-red-500'>{isValidated && "Enter required details below"}</div>
                        <form className="text-left" onSubmit={onSignup}>

                            <div className="flex flex-col mb-4">
                                <label className="form-label" htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control form-label p-1.5" name="userName" value={userDetails?.userName}
                                    onChange={(e) => setUserData("userName", e.target.value)} style={{ border: '1px solid #dbd7d7' }} />

                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" className="form-label form-control p-1.5 border border-black" name='email' value={userDetails?.emailId}
                                    onChange={(e) => setUserData("emailId", e.target.value)} style={{ border: '1px solid #dbd7d7' }} />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" className="form-label form-control p-1.5 border border-black" name='password' value={userDetails?.password}
                                    onChange={(e) => setUserData("password", e.target.value)} style={{ border: '1px solid #dbd7d7' }} />
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-black from-0% via-blue-900 via-45%  to-blue-800 to-55% mt-4 p-1 text-white text-center">
                                {/* <div className="bg-gradient-to-r from-black from-0% via-blue-900 via-45%  to-blue-800 to-55% mt-4 p-1 text-center"> */}
                                Sign Up
                                {/* </div> */}
                            </button>

                            <GoogleAuthWrapper />


                        </form>
                    </div>
                </div>
                <div className='img-container w-2/3' style={signuEnlarged}>
                <img src={imageConfig.limeBattery} className='m-auto pt-10'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp 