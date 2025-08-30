import { createCustomerService, deleteCustomerService, getAllCustomersService, getCustomerWithId, updateCustomerService } from "../services/customerService.js"

export const createCustomer = async (req, res) => {
    const result = await createCustomerService(req.body)

    if (result.success) {
        return res.status(201).json({ success: true, message: "Customer created successfully" })
    } else {      
        return res.status(500).json({
            success: false,
            message: result.message,
            errors: result.errors,
        });
    }
}

export const getCustomers = async (req, res) => {
    const response = await getAllCustomersService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return res.status(500).json({ success: false, message: "Failed to get customers" });
    }
}

export const getCustomerById = async (req, res) => {
    const response = await getCustomerWithId(req.params.custId);
    if (response)
        return res.status(200).send(response);
    else {
        return res.status(500).json({ success: false, message: "Failed to get customer" });
    }
}

export const updateCustomer = async (req, res) => {
    const response = await updateCustomerService(req.params.custId, req.body)

    if (response.success) {
        return res.status(200).send(response)
    } else {
        return res.status(500).json({
            success: false,
            message: result.message,
            errors: result.errors,
        });
    }
}

export const deleteCustomer = async (req, res) => {
    const response = await deleteCustomerService(req.params.custId)
    if (response) {
        return res.status(200).json({ success: true, message: "Customer deleted successfully" })
    } else {
        return res.status(500).json({ success: false, message: "Failed to delete customer" });
    }
}