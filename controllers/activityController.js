import { createActivityService, deleteActivityService, getActivityWithId, getAllActivitiesService, updateActivityService } from "../services/activityService.js"


export const createActivity = async (req, res) => {
    const result = await createActivityService(req.body)
    if (result.success) {
        return res.status(201).json({ success: true, message: "Activity created successfully" })
    } else {
        return new Error('Failed to create new Activity')
    }
}

export const getActivities = async (req, res) => {
    const response = await getAllActivitiesService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get Activities')
    }
}

export const getActivityById = async (req, res) => {
    const response = await getActivityWithId(req.params.actId);
    if (response)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get Activities')
    }
}

export const updateActivity = async (req, res) => {
    const response = await updateActivityService(req.params.actId, req.body)
    if (response.success) {
        return res.status(200).send(response)
    } else {
        return new Error('Failed to update Activity')
    }
}

export const deleteActivity = async(req,res) =>{
    const response = await deleteActivityService(req.params.actId)
     if (response) {
        return res.status(200).json({success:true, message:"Activity deleted successfully"})
    } else {
        return new Error('Failed to delete Activity')
    }
}