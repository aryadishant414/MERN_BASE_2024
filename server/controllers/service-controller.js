import { Service } from "../models/service-model.js";

export const serviceController = async (req, res) => {
    try {
        const response = await Service.find();

        if(!response) {
            return res.status(404).send({message: "No service found"});
        }

        res.status(200).send({message: response});
    } catch (error) {
        console.log("Error in Services : ",error);
        
    }
}