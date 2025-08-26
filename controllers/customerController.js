import { createCustomerService, deleteCustomerService, getAllCustomersService, getCustomerWithId, updateCustomerService } from "../services/customerService.js"

export const createCustomer = async (req, res) => {
    const result = await createCustomerService(req.body)
    if (result) {
        return res.status(201).json({ success: true, message: "Customer created successfully" })
    } else {
        return new Error('Failed to create new Customer')
    }
}

export const getCustomers = async (req, res) => {
    const response = await getAllCustomersService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get customers')
    }
}

export const getCustomerById = async (req, res) => {
    const response = await getCustomerWithId(req.params.custId);
    if (response)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get customer')
    }
}

export const updateCustomer = async (req, res) => {
    const response = await updateCustomerService(req.params.custId, req.body)
    if (response.success) {
        return res.status(200).send(response)
    } else {
        return new Error('Failed to update customer')
    }
}

export const deleteCustomer = async(req,res) =>{
    const response = await deleteCustomerService(req.params.custId)
     if (response) {
        return res.status(200).json({success:true, message:"Customer deleted successfully"})
    } else {
        return new Error('Failed to delete customer')
    }
}