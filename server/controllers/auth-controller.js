import {User} from '../models/user-model.js'

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

        const createdUser = await User.create({name, email, password, phone});

        // console.log(requestedData);  // testing purpose
        res.status(200).send({
            data: createdUser
        })

    } catch (error) {

        console.log(error);
        
    }
}




export {homePageController, registerPageController};