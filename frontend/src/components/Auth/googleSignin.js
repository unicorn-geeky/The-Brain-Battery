import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'
import authService from '../../services/Auth/authService'
import {useNavigate} from 'react-router-dom'

const GoogleSignin = ({authType}) => {
    const navigate = useNavigate()

    const responseFromGoogle = async(authRes) => {
        try{
            if(authRes['code']){
                const response = await authService.googleAuth(authRes['code'])

                console.log("response--",response?.data?.data?.token);
                navigate('/landing')               

            }
            console.log("authRes--",authRes);
            

        }catch(err){
            console.error("error from google auth: ", err)

        }
    }
    const googleLogin =  useGoogleLogin({
        onSuccess: responseFromGoogle,
        onError: responseFromGoogle,
        flow: 'auth-code',
    })
    return (
        <div className="border border-x-blue-600 border-t-indigo-500 border-b-indigo-950 shadow-md bg-white mt-4 p-1.5 text-center">
            <button type="submit" className="text-indigo-950 text-center" onClick={googleLogin}>
              {authType === 'signup' ? 'Continue With Google' : 'Log In With Google'}                 
            </button>
        </div>
    )
}

export default GoogleSignin