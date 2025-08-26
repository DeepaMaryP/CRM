import { Router } from "express";
import { createRole, deleteRoles, getRoleById, getRoles, updateRoles } from "../controllers/roleController.js";
import { validateRole } from "../middleware/roleMiddleware.js";

const router = Router ()

router.route("/").post(validateRole, createRole)
router.route("/").get(getRoles)
router.route("/:roleId").get(getRoleById)
router.route("/:roleId").patch(updateRoles)
router.route("/:roleId").delete(deleteRoles)

export default router