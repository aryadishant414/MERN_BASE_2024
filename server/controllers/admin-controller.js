import { User } from "../models/user-model.js"
import { Contact } from "../models/contact-model.js";


// get all users
    export const getAllUsers = async (req,res,next) => {
    try {
        // const users = await User.find(); // this users contains  password also we are removing passwords inside this see below line
        const users = await User.find({}, {password:0}); 

        // console.log("Data Inside 'getUsers' are : ", users); 

        

        if(!users || users.length === 0) {
            return res.status(404).send({message:"Not found the Users"});
        }

        return res.status(200).send(users);  
        

    } catch (error) {
        console.log("ADMIN ERRORRRRRRR",error);
        
        next(error);
    }
}


// get Single user data
export const getSingleUserData = async (req, res) => {
    try {
        console.log("DATA INSIDE incoming req inside 'getSingleUserData' controller is : ", req);
        const id = req.params.id;

        const singleUserData = await User.findOne({_id:id}, {password:0});

        console.log("Requested SINGLE USER DATA IS : ", singleUserData);

        res.status(200).send({singleUserData});
        
        
    } catch (error) {
        next(error);
    }
}



// get all contacts
export const getAllContacts = async (req,res,next) => {
    try {
        const contacts = await Contact.find();

        console.log("Data inside contacts is : ", contacts);
        
        if(!contacts || contacts.length === 0) {
            return res.status(404).send({message:"Could not found the Contacts"});
        }

        res.status(200).send(contacts);
        
    } catch (error) {
        next(error);
    }
}




// Deleting a User by its ID
export const deleteUserById = async (req, res) => {
    try {
        console.log("DATA INSIDE REQUEST THAT IS COMING FROM FRONTEND : ", req);
        const id = req.params.id; // this we do when frontend is sensding data inside URL
        const findIdInOurDatabase = await User.findOne({_id: id});

        if(!findIdInOurDatabase) {
            return res.status(404).send({message: "Do not find the id in DATABASE"});
        }

        await User.deleteOne({_id:id});

        return res.status(200).send({message: "User Deleted Successfully"});

    } catch (error) {
        next(error);
    }
}
