import mongoose from 'mongoose';

// const URI = "mongodb://127.0.0.1:27017/mern_admin";  // Local Database URI
// const URI = "mongodb+srv://<db_username>:<db_password>@cluster0.sejlsni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const URI = process.env.MONGODB_URI;


const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successfull to DB");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}

export {connectDB};