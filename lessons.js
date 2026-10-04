// // Load express
// const express = require("express");
// // Create express app
// const app = express();
// // Choose a port
// const PORT = 3000;

// app.use(express.json());

// //Routes

// //Get Route
// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// //Post Route
// app.post("/users", (req, res) => {
//   const userData = req.body;
//   res.send(`User Created With Name : ${userData.email}`);
// });

// // PUT route
// app.put("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   const updatedData = req.body;
//   res.send(`User ${userId} updated with email: ${updatedData.email}`);
// });

// // DELETE route
// app.delete("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ${userId} deleted`);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

//Post Route
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

//Get One user

// app.get("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);
//   if (!user) return res.status(404).send("User not found");
//   res.json(user);
// });

// PUT route
// app.put("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   const updatedData = req.body;
//   res.send(`User ${userId} updated with email: ${updatedData.email}`);
// });

// app.put("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);
//   if (!user) return res.status(404).send("User not found");
//   user.name = req.body.name;
//   res.json(user);
// });

// DELETE route
// app.delete("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ${userId} deleted`);
// });

// app.delete("/users/:id", (req, res) => {
//   users = users.filter((u) => u.id != req.params.id);
//   res.send("User deleted");
// });
