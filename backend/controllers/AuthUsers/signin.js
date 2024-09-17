
import bcrypt from "bcrypt";
import User from "../../models/user.js";
import generateToken from "../../utils/genericFunction.js";

export const userSignin = async(req,res) =>{
    try{

      const { emailId, password } = req.body;

      const user = await User.findOne({ emailId });
       
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const isPwdMatch = await bcrypt.compare(password, user.password);
      
      if(!isPwdMatch){
        return res.status(404).json({ error: "The given password is incorrect" })
      }

      const token = await generateToken({id: user._id, emailId })

      res.status(200).json({success: true, data : {token}})

    }catch (error) {
        console.error('Error retrieving user', error);
        res.status(500).json({ error: 'Failed to Login user' });
      }
    }



   