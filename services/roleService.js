import Role from "../models/role.js"

export const createRoleService = async (data) => {
    try {
        let newRole = new Role(data)
        newRole = await newRole.save()
        return { success: true }
    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const getAllRolesService = async () => {
    try {
        const allRoles = await Role.find();
        return { success: true, allRoles };

    } catch (error) {
        return { success: false }
    }
}

export const getRoleWithId = async (id) => {
    try {
        const role = await Role.findById(id)
        if (role) {
            return role
        }
        return false

    } catch (error) {
        return false
    }
}

export const updateRoleService = async (id, data) => {
    try {
        const updatedRole = await Role.findByIdAndUpdate(id, data);
        if (updatedRole) {
            return { success: true, message: "Role updated succesfully" }
        } else {
            return { success: false, message: "Failed to update" }
        }

    } catch (error) {
        console.log(error);
        return { success: false }

    }
}

export const deleteRoleService = async(id) =>{
    try {
       await Role.findByIdAndDelete(id)
       return true;
    } catch (error) {
        console.log(error);
        return false;        
    }
}