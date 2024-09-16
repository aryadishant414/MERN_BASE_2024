import mongoose from 'mongoose';
import  bcrypt  from 'bcryptjs';

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

// password hashing (Method 2)
userSchema.pre("save", async function (next) {
    // console.log("pre method", this);
    const user = this;

    // check if password is Modified or not
    if(!user.isModified("password")) {
        next();
    }

    try {
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        
    } catch (error) {
        next(error);
    }
})


// Define the model or the collection name
export const User = mongoose.model('User', userSchema);

// NOTE : Creating Model means we are creating the Collection in Database (on whichever Database we are connected right now)