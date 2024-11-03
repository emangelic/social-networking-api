// const { User } = require('../models');

// module.exports = {
//   async getUsers(req, res) {
//     try {
//       const users = await User.find();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   async createUser(req, res) {
//     try {
//       const user = await User.create(req.body);
//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };

// controllers/userController.js
const { User } = require('../models');

module.exports = {
  // GET all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId).populate('friends').populate('thoughts');
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // PUT to update a user by ID
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE a user by ID
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json({ message: 'User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to add a friend to user's friend list
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE to remove a friend from user's friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
