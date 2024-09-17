
import User from "../../models/user.js";
import generateToken from "../../utils/genericFunction.js";
import oauth2client  from "../../utils/googleConfig.js"
import axios from 'axios';


export const googleOauthSignin = async (req, res) => {
    try {
        const { code } = req.query;
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);
       
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)


        const { email, name } = userRes.data;

        let user = await User.findOne({ emailId: email })
        if (!user) {
            user = new User({
                fullName: name,
                emailId: email,
            })
        }
        const registeredUser = await user.save();
        const token = await generateToken({ id: registeredUser._id, email })
        res.status(200).json({ success: true, data: { token } })

    } catch (error) {
        console.error('Error retrieving user', error);
        res.status(500).json({ error: 'Failed to Login user' });
    }
 }