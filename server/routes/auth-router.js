import express from 'express';

const router = express.Router();

router.route("/").get((req,res) => {
    res.status(200).send("<h1>Home Page using router</h1>")
})
router.route("/register").get((req,res) => {
    res.status(200).send("<h1>Regisster Page using router</h1>")
})

// router.get("/" , (req,res) => {
//     res.status(200).send("<h1>Home Page using router</h1>")
// })
// router.get("/register" , (req,res) => {
//     res.status(200).send("<h1>Register Page using router</h1>")
// })


export {router};