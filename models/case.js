import mongoose, { model, Schema } from "mongoose";

const caseSchema = new Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true }
}, { timestamps: true }
)

const Case = model("Case", caseSchema)
export default Case