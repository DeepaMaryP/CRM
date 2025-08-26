import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
        status: { type: String, enum: ["Active", "InActive"], default: "Active" },
        roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
    }, { timestamps: true });

const User = model("User", userSchema)
export default User