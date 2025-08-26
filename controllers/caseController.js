import { createCaseService, deleteCaseService, getAllCaseService, getCaseWithId, updateCaseService } from "../services/caseService.js"

export const createCase = async (req, res) => {
    const result = await createCaseService(req.body)
    if (result) {
        return res.status(201).json({ success: true, message: "Case created successfully" })
    } else {
        return new Error('Failed to create new Case')
    }
}

export const getCases = async (req, res) => {
    const response = await getAllCaseService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get Cases')
    }
}

export const getCaseById = async (req, res) => {
    const response = await getCaseWithId(req.params.caseId);
    if (response)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get Case')
    }
}

export const updateCase = async (req, res) => {
    const response = await updateCaseService(req.params.caseId, req.body)
    if (response.success) {
        return res.status(200).send(response)
    } else {
        return new Error('Failed to update Case')
    }
}

export const deleteCase = async(req,res) =>{
    const response = await deleteCaseService(req.params.caseId)
     if (response) {
        return res.status(200).json({success:true, message:"Case deleted successfully"})
    } else {
        return new Error('Failed to delete Case')
    }
}