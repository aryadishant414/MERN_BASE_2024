import {User} from '../models/user-model.js'
import bcrypt from 'bcryptjs'

// **************** Home-Page Controller **************************
// ****************************************************************
const homePageController = async (req, res) => {
    try {

        res.status(200).send("<h1>Home Page using Controller</h1>")

    } catch (error) {

        console.log(error);
        
    }
}



// ******************** Registration Controller **************************
//  **********************************************************************

const registerPageController = async (req, res) => {
    try {
        const {username, email, password, phone} = req.body;

        // check if user already exist on Database
        const userExist = await User.findOne({email: email});
        if(userExist) {
            return res.status(400).send({
                message:"User Already Exist"
            })
        }

        // hash password (method 1) AND check the METHOD 2 in User Model
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);

        const createdUser = await User.create({username: username, email: email, password: password, phone: phone});

        // console.log(requestedData);  // testing purpose
        res.status(201).send({
            message: "User Registered Successfully",
            data: createdUser,
            token: await createdUser.generateToken(),  // generate token function calling at User Model
            userId: createdUser._id.toString(),
        })

    } catch (error) {

        // console.log(error);
        next(error);
        
    }
}



// ************** Login Controller **********************
// ******************************************************
const loginPageController = async (req, res) => {
    try {
        
        const {email, password} = req.body;

        // check is email exist in database
        const userExist = await User.findOne({email: email});
        if(!userExist) {
            return res.status(404).send({
                message: "Invalid User Credentials"
            })
        }
        // console.log("USER TOO EXIST KRTA HAI");  // just a check
        

        // compare password using bcrypt (Method 1) , And check method 2 in User Model 
        // const isPasswordValid = await bcrypt.compare(password, userExist.password);


        // console.log("Standing Before ISPASSWORD VALID");  // just a check

        // compare password method calling at User Model
        const isPasswordValid = await userExist.comparePassword(password);

        // console.log("Standing After ISPASSWORD VALID");  // just a check
        

        if(!isPasswordValid) {
            return res.status(404).send({
                message: "Check your email or password"
            })
        }
        res.status(200).send({
            message: "Login Successful",
            data: {
                email: userExist.email,
                phone: userExist.phone,
            },
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
        })


    } catch (error) {
        res.status(500).send({
            message:"Error at Server Side"
        })
        
    }
}



// ************** User Controller 
// to send user data - User Logic
// **********************
// ******************************************************

const userController = async (req,res) => {
    try {
        const userData = req.userxx;   // this 'req.userxx' is coming from "authMiddleware" inside this req(request)
        console.log(userData);
        res.status(200).send({userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
}









export {homePageController, registerPageController, loginPageController, userController};