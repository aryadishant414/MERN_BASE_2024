import jwt from 'jsonwebtoken';
import { User } from './../models/user-model.js';

export const authMiddleware = async (req, res, next) => {
    // console.log("INSIDE REQ is : ", req);
    
    try {
        const token = req.header("Authorization");
        
        if(!token) {
            return res.status(401).send({message:"Unauthorized HTTP, Token not provided by Frontend/Client Side"});
            
        }
        console.log("Header token is : ", token);
        
        // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
        // removing "Bearer " from the token received from frontend/client side
        const jwtToken = token.replace("Bearer","").trim();
        // console.log("After removing Bearer space : ", jwtToken);
        
    
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        // console.log("data INside isVerified is : ", isVerified);
        
        const userData = await User.findOne({email: isVerified.email}).select({password: 0,});

        console.log("INSIDE USER DATA : ", userData);
        

        // setting custom properties
        // req. ke saath we can use/set custom names like 'userxx' hamne kiya hai
        req.userxx = userData;
        req.token = token;
        req.userId = userData._id;
        
        next();
    } catch (error) {
        return res.status(401).send({message: "Unauthorized. Invalid token"});
    }
};