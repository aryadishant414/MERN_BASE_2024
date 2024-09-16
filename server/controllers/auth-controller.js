import {User} from '../models/user-model.js'
import bcrypt from 'bcryptjs'

// Home-Page Controller
const homePageController = async (req, res) => {
    try {

        res.status(200).send("<h1>Home Page using Controller</h1>")

    } catch (error) {

        console.log(error);
        
    }
}



// Registration Controller
const registerPageController = async (req, res) => {
    try {
        const {name, email, password, phone} = req.body;

        // check if user already exist on Database
        const userExist = await User.findOne({email: email});
        if(userExist) {
            return res.status(400).send({
                msg:"User Already Exist"
            })
        }

        // hash password (method 1) AND check the METHOD 2 in User Model
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);

        const createdUser = await User.create({name: name, email: email, password: password, phone: phone});

        // console.log(requestedData);  // testing purpose
        res.status(201).send({
            message: "User Registered Successfully",
            data: createdUser,
            token: await createdUser.generateToken(),
            userId: createdUser._id.toString(),
        })

    } catch (error) {

        console.log(error);
        
    }
}




export {homePageController, registerPageController};