import Activity from "../models/activities.js";

export const createActivityService = async (data) => {
    try {
        let newActivity= new Activity(data)
        newActivity = await newActivity.save()
        return { success: true }
    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const getAllActivitiesService = async () => {
    try {
        const allActivities= await Activity.find();
        return { success: true, allActivities };

    } catch (error) {
        return { success: false }
    }
}

export const getActivityWithId = async (id) => {
    try {
        const activity = await Activity.findById(id)
        if (activity) {
            return activity
        }
        return false

    } catch (error) {
        return false
    }
}

export const updateActivityService = async (id, data) => {
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(id, data);
        if (updatedActivity) {
            return { success: true, message: "Activity updated succesfully" }
        } else {
            return { success: false, message: "Failed to update" }
        }

    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const deleteActivityService = async(id) =>{
    try {
       await Activity.findByIdAndDelete(id)
       return true;
    } catch (error) {
        console.log(error);
        return false;        
    }
}