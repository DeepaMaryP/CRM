export const validateCase = async (req, res, next) => {
    const { customerId, userId, description } = req.body

    if (!customerId) {
        return res.status(400).json({ success: false, message: "please enter customerId" })
    }
    if (!userId) {
        return res.status(400).json({ success: false, message: "please enter userId" })
    }    
     if (!description) {
        return res.status(400).json({ success: false, message: "please enter description" })
    }
    next()

}