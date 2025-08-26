export const handleValidateUserSignIn = async (req, res, next) => {
    const { name, password } = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "please enter name" })
    }
    if (!password) {
        return res.status(400).json({ success: false, message: "please enter password" })
    }
    next()
}

export const validateUser = async (req, res, next) => {
    const { name, email, password, roleId } = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "please enter name" })
    }
    if (!email) {
        return res.status(400).json({ success: false, message: "please enter email" })
    }
    if (!password) {
        return res.status(400).json({ success: false, message: "please enter password" })
    }
    if (!roleId) {
        return res.status(400).json({ success: false, message: "please enter roleId" })
    }
    next()

}