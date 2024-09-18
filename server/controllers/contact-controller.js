import { Contact } from "../models/contact-model.js";

export const contactFormController = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(200).send({message: "Contact Form Submitted SUccessfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: "Contact Form is not Submitted"});
        
    }
}