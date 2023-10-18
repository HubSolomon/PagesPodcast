
// middleware/authMiddleware.js
import User from '../models/User.js';

const authenticateUser = async (req, res, next) => {
  try {
    // Add authentication logic here (e.g., verify JWT token)
    // For simplicity, this example doesn't include actual authentication

    // For testing, let's assume user is authenticated with userId 1
    const user = await User.findById('your-user-id');
    req.body.userId = user._id;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  authenticateUser,
};
