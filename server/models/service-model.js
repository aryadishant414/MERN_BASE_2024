import mongoose from 'mongoose';


const serviceSchema = new mongoose.Schema(
    {
        service: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        provider: {
            type: String,
            required: true,
        }

    }, 
    
    {timestamps: true}
);

// create a model or a Collection
export const Service = mongoose.model('Service', serviceSchema);
