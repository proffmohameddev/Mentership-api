import User from "../models/user.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = new User(req.body);
  const savedUser = await user.save();
  res.status(201).json(savedUser);
};

export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.json({ message: `User ${deletedUser._id} deleted` });
};

export const getUserinfo = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
};

// REGISTER
// export const register = async (req, res, next) => {
//   const { name, email, password } = req.body;

//   try {
//     email = email.toLowerCase();

//     const exists = await User.findOne({ email });

//     if (exists)
//       return res.status(400).json({ message: "Email already in use" });

//     const user = await User.create({ name, email, password });

//     const token = generateToken(user._id);

//     res.status(201).json({ token });
//   } catch (err) {
//     next(err);
//   }
// };

// const user = require("../models/user");
// const User = require("../models/user");

// exports.getUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// exports.createUser = async (req, res) => {
//   const user = new User(req.body);
//   const saved = await user.save();
//   res.status(201).json(saved);
// };

// // UPDATE a user
// exports.updateUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       req.body,
//       { new: true }, // returns updated document
//     );
//     if (!updatedUser) {
//       return res.status(404).send("User not found");
//     }
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// };

// // DELETE a user
// exports.deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).send("User not found");
//     }
//     res.send(`User with id ${id} deleted`);
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// };
