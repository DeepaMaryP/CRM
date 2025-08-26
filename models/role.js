import { model, Schema } from "mongoose";

const roleSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true }
    }, { timestamps: true }
)

const Role = model('Role', roleSchema)
export default Role