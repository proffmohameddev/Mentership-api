import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserinfo,
} from "../controllers/users.js";
import { createUserSchema } from "../schemas/userSchema.js";
import { validate } from "../middlewares/validateZod.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserinfo);
router.post("/create", validate(createUserSchema), createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
