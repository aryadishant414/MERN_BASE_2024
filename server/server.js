// THIS file is Creating the SERVER by using Express

import express from 'express';
import 'dotenv/config';

const app = express();


app.get("/" , (req, res) => {
    res.status(200).send("<h1>Home Page</h1>");
})
app.get("/register" , (req, res) => {
    res.status(200).send("<h1>Register Page</h1>");
})
app.get("/login" , (req, res) => {
    res.status(200).send("<h1>Login Page</h1>");
})

// console.log("PORT IS : " , process.env.PORT); // just to check



const port = process.env.PORT || 5000;

// Starting server
app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})