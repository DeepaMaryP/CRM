import { Router } from "express";
import { handleAuth } from "../middleware/auth.js";
import { createCase, deleteCase, getCaseById, getCases, updateCase } from "../controllers/caseController.js";
import { validateCase } from "../middleware/caseMiddleware.js";

const router = Router()

router.route("/").post(handleAuth, validateCase, createCase);
router.route("/").get(handleAuth, getCases)
router.route("/:caseId").get(handleAuth, getCaseById)
router.route("/:caseId").patch(handleAuth, updateCase)
router.route("/:caseId").delete(handleAuth, deleteCase)

export default router;