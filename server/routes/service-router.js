import express from 'express';
import { serviceController } from '../controllers/service-controller.js';

const router = express.Router();

router.route("/service").get(serviceController);

export {router};