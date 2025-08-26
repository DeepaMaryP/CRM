export const validateRole = async (req, res, next) => {
    const { name, description } = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "please enter name" })
    }
    if (!description) {
        return res.status(400).json({ success: false, message: "please enter description" })
    }
    
    next()

}