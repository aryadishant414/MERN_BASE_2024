import express from 'express';
import { contactFormController } from '../controllers/contact-controller.js';

const router = express.Router();

router.route("/contact").post(contactFormController);


export {contactFormController};