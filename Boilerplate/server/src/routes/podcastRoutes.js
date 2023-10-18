
// routes/podcast.js
import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import podcastController from '../controllers/podcast.js';

const router = express.Router();

router.post('/create', authMiddleware.authenticateUser, podcastController.createPodcast);

export default router;
