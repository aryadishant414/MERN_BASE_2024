// THIS file is Creating the Backend SERVER by using Express

import express from 'express';
import 'dotenv/config';
import {router} from './routes/auth-router.js';



const app = express();

app.use(express.json());  // Its a middleware that Allow us to send and receive data in JSON FORMAT througout our Backend

app.use("/api/v1/auth",router);



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

// Starting server
app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})