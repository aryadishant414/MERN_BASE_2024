import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }

    }, 
    
    {timestamps: true}
);

// create a model or a Collection
export const Contact = mongoose.model('Contact', contactSchema);
