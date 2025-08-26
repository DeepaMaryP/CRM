import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, loginUser, updateUser } from "../controllers/userController.js";
import { handleAuth } from "../middleware/auth.js";
import { validateUser } from "../middleware/userMiddleware.js";

const router = Router()

router.route('/login').post(loginUser)
router.route("/").post(validateUser, createUser);
router.route("/").get(getUsers)
router.route("/:userId").get(getUserById)
router.route("/:userId").patch(handleAuth, updateUser)
router.route("/:userId").delete(handleAuth, deleteUser)

export default router;