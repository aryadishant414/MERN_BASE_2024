import { User } from "../models/user-model.js"


// get all users
    const getAllUsers = async (req,res) => {
    try {
        const users = await User.find();

        console.log("Data Inside 'getUsers' are : ", users);
        

        if(!users || users.length === 0) {
            return res.status(404).send({message:"Not found the Users"});
        }

        return res.status(200).send(users);
        

    } catch (error) {
        next(error)
    }
}

export {
    getAllUsers
}