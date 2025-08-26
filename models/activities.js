import mongoose, { model, Schema } from "mongoose";

const activitiesSchema = new Schema({
    caseId: { type: mongoose.Schema.Types.ObjectId, ref: "Case", required: true },
    AssignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ['Call', 'Mail', 'Direct', 'Meeting', 'Note', 'Other'], required: true },
    content: { type: String, required: true },
    priority: { type: String, enum: ['Low', 'Normal', 'High', 'Highest'], default: 'Normal' },
    status: { type: String, required: true }
}, { timestamps: true }
)

const Activity = model("Activities", activitiesSchema)
export default Activity