import express from 'express';
import { getAllUsers, getAllContacts } from '../controllers/admin-controller.js';

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

export {router};