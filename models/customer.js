import { model, Schema } from "mongoose";

const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, match: [/^\+?[0-9]{7,15}$/, "Invalid phone number"] }
}, { timestamps: true }
)

const Customer = model("Customer", customerSchema)
export default Customer;