export const validateCustomer = async (req, res, next) => {
    const { firstName, lastName, email } = req.body

    if (!firstName) {
        return res.status(400).json({ success: false, message: "please enter firstName" })
    }
    if (!lastName) {
        return res.status(400).json({ success: false, message: "please enter lastName" })
    }    
     if (!email) {
        return res.status(400).json({ success: false, message: "please enter email" })
    }
    next()

}