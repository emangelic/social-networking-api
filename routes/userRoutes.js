// const router = require('express').Router();
// const { getUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../controllers/userController');

// router.route('/').get(getUsers).post(createUser);
// router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// module.exports = router;


// routes/userRoutes.js
const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../controllers/userController');

// GET all users and POST a new user
router.route('/')
  .get(getUsers)
  .post(createUser);

// GET, PUT, and DELETE a specific user by ID
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// POST and DELETE friends for a user by ID
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
