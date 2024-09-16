import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }

    }, 
    
    {timestamps: true}
)

export const User = mongoose.model('User', userSchema);

// NOTE : Creating Model means we are creating the Collection in Database (on whichever Database we are connected right now)