// THIS file is Creating the Backend SERVER by using Express

import 'dotenv/config';
import express from 'express';
import {router as authRoute} from './routes/auth-router.js';
import { connectDB } from './utils/db.js';
import { errorMiddleware } from './middlewares/error-middleware.js';
import { contactFormController as contactFormRoute } from './routes/contact-router.js';



const app = express();

app.use(express.json());  // Its a middleware that Allow us to send and receive data in JSON FORMAT througout our Backend
// NOTE : ".use" is a method used add middleware functions to your application. Middleware functions are like little helpers that sit between the client request and the server response.

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/form", contactFormRoute);

app.use(errorMiddleware);


// app.get("/" , (req, res) => {
//     res.status(200).send("<h1>Home Page</h1>");
// })
// app.get("/register" , (req, res) => {
//     res.status(200).send("<h1>Register Page</h1>");
// })
// app.get("/login" , (req, res) => {
//     res.status(200).send("<h1>Login Page</h1>");
// })





const port = process.env.PORT || 5000;

// Connecting Backend with our Database and Starting server 
connectDB().then( () => {
    app.listen(port, () => {
        console.log(`Server is Running on Port ${port}`);
    })
})


// app.listen(port, () => {
//     console.log(`Server is Running on Port ${port}`);
// })
