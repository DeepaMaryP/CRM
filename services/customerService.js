import Customer from "../models/customer.js";

export const createCustomerService = async (data) => {
    try {
        let newCustomer = new Customer(data);
        newCustomer = await newCustomer.save();
        return { success: true }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message || "Failed to create customer",
            errors: error.errors || null, // contains field-level details (phone, email etc.)
        };
    }
}

export const getAllCustomersService = async () => {
    try {
        const allCustomers = await Customer.find();
        return { success: true, allCustomers };

    } catch (error) {
        return { success: false }
    }
}

export const getCustomerWithId = async (id) => {
    try {
        const customer = await Customer.findById(id)
        if (customer) {
            return customer
        }
        return false

    } catch (error) {
        return false
    }
}

export const updateCustomerService = async (id, data) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(id, data);
        if (updatedCustomer) {
            return { success: true, message: "Customer updated succesfully" }
        } else {
            return { success: false, message: "Failed to update" }
        }

    } catch (error) {
        console.log(error);
         return {
            success: false,
            message: error.message || "Failed to update customer",
            errors: error.errors || null, // contains field-level details (phone, email etc.)
        };
    }
}

export const deleteCustomerService = async (id) => {
    try {
        await Customer.findByIdAndDelete(id)
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}