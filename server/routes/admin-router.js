import express from 'express';
import { getAllUsers, getAllContacts, deleteUserById, getSingleUserData, updateUserById, deleteContactById } from '../controllers/admin-controller.js';
import { authMiddleware } from './../middlewares/authMiddleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

// deleting a user
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);
// deleting a contact
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactById);

// get data of a Single User
router.route("/users/:id").get(authMiddleware, adminMiddleware, getSingleUserData);

// update data of a user
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById);

export {router};