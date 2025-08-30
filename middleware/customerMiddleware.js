export const validateCustomer = async (req, res, next) => {

    const { firstName, lastName, email, phone } = req.body 

    if (!firstName) {
        return res.status(400).json({ success: false, message: "firstName cannot be empty" })
    }
    if (!lastName) {
        return res.status(400).json({ success: false, message: "lastName cannot be empty" })
    }
    if (!email) {
        return res.status(400).json({ success: false, message: "email cannot be empty" })
    }
    if (!phone) {
        return res.status(400).json({ success: false, message: "phone cannot be empty" })
    }

    const tenDigit = /^[0-9]{10}$/;
    // Allow: + followed by 1–3 digit country code and 7–12 digit number
    // Example: +91XXXXXXXXXX, +1415XXXXXXX
    const withCountryCode = /^\+[0-9]{1,3}[0-9]{7,12}$/;

    if (!(tenDigit.test(phone) || withCountryCode.test(phone))) {
        return res.status(400).json({
            success: false,
            message:
                "Invalid phone number. Please enter a 10-digit number (e.g., 9876543210) or include country code (e.g., +919876543210)."
        });
    }

    next()
}

export const validateCustomerUpdate = (req, res, next) => {
  const { firstName, lastName, email, phone } = req.body;

  // If the field exists, validate it. Otherwise, ignore.
  if (firstName !== undefined && firstName.trim() === "") {
    return res.status(400).json({ success: false, message: "firstName cannot be empty" });
  }

  if (lastName !== undefined && lastName.trim() === "") {
    return res.status(400).json({ success: false, message: "lastName cannot be empty" });
  }

  if (email !== undefined && email.trim() === "") {
    return res.status(400).json({ success: false, message: "email cannot be empty" });
  }

  if (phone !== undefined && phone.trim() === "") {
    return res.status(400).json({ success: false, message: "phone cannot be empty" });    
  }else if(phone.trim().length > 0){
     const tenDigit = /^[0-9]{10}$/;
    // Allow: + followed by 1–3 digit country code and 7–12 digit number
    // Example: +91XXXXXXXXXX, +1415XXXXXXX
    const withCountryCode = /^\+[0-9]{1,3}[0-9]{7,12}$/;

    if (!(tenDigit.test(phone) || withCountryCode.test(phone))) {
        return res.status(400).json({
            success: false,
            message:
                "Invalid phone number. Please enter a 10-digit number (e.g., 9876543210) or include country code (e.g., +919876543210)."
        });
    }

  }

  next(); // ✅ continue to controller
};
