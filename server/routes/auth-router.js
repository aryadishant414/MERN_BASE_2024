import express from 'express';
import { homePageController, registerPageController, loginPageController} from '../controllers/auth-controller.js';

const router = express.Router();


router.route("/").get(homePageController);
router.route("/register").post(registerPageController);
router.route("/login").post(loginPageController);

// router.get("/" , (req,res) => {
//     res.status(200).send("<h1>Home Page using router</h1>")
// })
// router.get("/register" , (req,res) => {
//     res.status(200).send("<h1>Register Page using router</h1>")
// })


export {router};