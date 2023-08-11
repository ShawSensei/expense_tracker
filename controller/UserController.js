const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../model/userModel');

const UserControl = async(data)=>{
    if (data.command === "get user"){
        const result = await getUser(data.data.email);
        return result;
    }
    else if (data.command === "get users"){
        const result = await getUsers();
        return result;
    }
    else if (data.command === "create user"){
        const result = await createUser(data.data);
        return result;
    }
    else if (data.command === "update user"){
        const result = await updateUser(data.data);
        return result;
    }
    else if (data.command === "delete user"){
        const result = await deleteUser(data.data);
        return result;
    }
    else{
        return "Invalid Command";
    }
}
module.exports = UserControl;
/*
data type:
data → {
    command: "get user" / "get users" / "update user" / "delete user" / "create user",
    data: {
        serial: "serial",
        email: "email",
        password: "password",
        firstname: "firstname",
        lastname: "lastname"
    }
}
*/