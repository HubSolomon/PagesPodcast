

// models/Podcast.js
import mongoose from 'mongoose';

const podcastSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Podcast = mongoose.model('Podcast', podcastSchema);

export default Podcast;
