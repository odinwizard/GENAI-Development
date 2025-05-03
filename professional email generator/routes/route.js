import express from 'express';
import generatedEmail from '../controller/serviceController.js';
const router = express.Router();




router.post('/generate', generatedEmail);

export default router;