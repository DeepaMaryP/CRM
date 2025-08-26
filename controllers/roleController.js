import { createRoleService, deleteRoleService, getAllRolesService, getRoleWithId, updateRoleService } from "../services/roleService.js"

export const createRole = async (req, res) => {
  const result =  await createRoleService(req.body);
  
  if(result.success){
    return res.status(201).json({success : true, message :"Role created successfully"})
  }else{
    return new Error('Failed to create new role')
  }
}

export const getRoles = async (req, res) => {
    const response = await getAllRolesService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get roles')
    }
}

export const getRoleById = async (req, res) => {
    const response = await getRoleWithId(req.params.roleId);
    if (response)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get role')
    }
}

export const updateRoles = async (req, res) => {
    const response = await updateRoleService(req.params.roleId, req.body)
    if (response.success) {
        return res.status(200).send(response)
    } else {
        return new Error('Failed to update role')
    }
}

export const deleteRoles = async(req,res) =>{
    const response = await deleteRoleService(req.params.roleId)
     if (response) {
        return res.status(200).json({success:true, message:"Role deleted successfully"})
    } else {
        return new Error('Failed to delete role')
    }
}