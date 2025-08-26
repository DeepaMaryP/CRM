import { Router } from "express";
import { handleAuth } from "../middleware/auth.js";
import { createCustomer, deleteCustomer, getCustomerById, getCustomers, updateCustomer } from "../controllers/customerController.js";
import { validateCustomer } from "../middleware/customerMiddleware.js";

const router = Router()

router.route("/").post(handleAuth, validateCustomer, createCustomer);
router.route("/").get(handleAuth, getCustomers)
router.route("/:custId").get(handleAuth, getCustomerById)
router.route("/:custId").patch(handleAuth, updateCustomer)
router.route("/:custId").delete(handleAuth, deleteCustomer)

export default router;