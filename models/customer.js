import { model, Schema } from "mongoose";

const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true, match: [/^\+?[0-9]{7,15}$/, "Invalid phone number"] }
    //Between 7 and 15 digits (ITU standard for phone numbers)
}, { timestamps: true }
)

const Customer = model("Customer", customerSchema)
export default Customer;