import Case from "../models/case.js"

export const createCaseService = async (data) => {
    try {
        let newCase= new Case(data)
        newCase = await newCase.save()
        return { success: true }
    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const getAllCaseService = async () => {
    try {
        const allCases = await Case.find();
        return { success: true, allCases };

    } catch (error) {
        return { success: false }
    }
}

export const getCaseWithId = async (id) => {
    try {
        const selCase = await Case.findById(id)
        if (selCase) {
            return selCase
        }
        return false

    } catch (error) {
        return false
    }
}

export const updateCaseService = async (id, data) => {
    try {
        const updatedCase = await Case.findByIdAndUpdate(id, data);
        if (updatedCase) {
            return { success: true, message: "Case updated succesfully" }
        } else {
            return { success: false, message: "Failed to update" }
        }

    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const deleteCaseService = async(id) =>{
    try {
       await Case.findByIdAndDelete(id)
       return true;
    } catch (error) {
        console.log(error);
        return false;        
    }
}