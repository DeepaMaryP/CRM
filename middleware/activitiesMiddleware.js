export const validateActivity = async (req, res, next) => {
    const { caseId, AssignedTo, type, content, status } = req.body

    if (!caseId) {
        return res.status(400).json({ success: false, message: "please enter caseId" })
    }
    if (!AssignedTo) {
        return res.status(400).json({ success: false, message: "please enter AssignedTo" })
    }    
     if (!type) {
        return res.status(400).json({ success: false, message: "please enter type" })
    }
     if (!content) {
        return res.status(400).json({ success: false, message: "please enter content" })
    }
     if (!status) {
        return res.status(400).json({ success: false, message: "please enter status" })
    }
    next()

}