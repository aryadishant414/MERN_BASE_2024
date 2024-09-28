import express from 'express';
import { getAllUsers, getAllContacts, deleteUserById, getSingleUserData } from '../controllers/admin-controller.js';
import { authMiddleware } from './../middlewares/authMiddleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

// deleting a user
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);

// get data of a Single User
router.route("/users/:id").get(authMiddleware, adminMiddleware, getSingleUserData);

export {router};