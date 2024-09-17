import express from "express"

import { userSignup } from "../controllers/AuthUsers/signup.js";
import { userSignin } from "../controllers/AuthUsers/signin.js";
import { googleOauthSignin } from "../controllers/AuthUsers/googleSignin.js";

const userRoute = express.Router();

userRoute.post('/signup',userSignup);
userRoute.post('/login',userSignin);
userRoute.get('/google',googleOauthSignin);




export default userRoute;