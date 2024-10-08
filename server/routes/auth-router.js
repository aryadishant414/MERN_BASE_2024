import express from 'express';
import { homePageController, registerPageController, loginPageController, userController} from '../controllers/auth-controller.js';
import {validate} from '../middlewares/validate-middleware.js'
import {loginSchema, signupSchema} from '../validators/auth-validator.js'
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.route("/").get(homePageController);

router.route("/register")
    .post(validate(signupSchema),
    registerPageController
);

router.route("/login").post(validate(loginSchema), loginPageController);

router.route("/user").get(authMiddleware,userController);

// router.get("/" , (req,res) => {
//     res.status(200).send("<h1>Home Page using router</h1>")
// })
// router.get("/register" , (req,res) => {
//     res.status(200).send("<h1>Register Page using router</h1>")
// })


export {router};