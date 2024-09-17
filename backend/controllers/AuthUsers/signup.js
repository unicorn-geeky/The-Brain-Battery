import User from "../../models/user.js";

export const userSignup = async(req,res) =>{
    try{
        const { userName, emailId, password } = req.body;

        const userExists = await User.findOne({ emailId })

        if(userExists)
            return res.status(400).json({ error: 'User already exists' });    

        
        const newUser = new User({
            fullName : userName,
            emailId,
            password
        })
        const registeredUser = await newUser.save();
        res.status(201).send({msg : "User has been registered successfully"})

    }
    catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}