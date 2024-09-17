import jwt from "jsonwebtoken";


const generateToken = async(id,emailId) =>{
    try{        
        const token =jwt.sign({ id,emailId },process.env.JWT_SECRET_KEY,{
            expiresIn: "2h"
        })        
        return token;
        
    } catch (err) {
        return (err);
      }

}

export default generateToken