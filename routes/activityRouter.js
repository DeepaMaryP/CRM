import { Router } from "express";
import { handleAuth } from "../middleware/auth.js";
import { createActivity, deleteActivity, getActivities, getActivityById, updateActivity } from "../controllers/activityController.js";
import { validateActivity } from "../middleware/activitiesMiddleware.js";

const router = Router()

router.route("/").post(handleAuth, validateActivity, createActivity);
router.route("/").get(handleAuth, getActivities)
router.route("/:actId").get(handleAuth, getActivityById)
router.route("/:actId").patch(handleAuth, updateActivity)
router.route("/:actId").delete(handleAuth, deleteActivity)

export default router;