const User = require('../schema/user');

const createUser = async(data)=>{
    try{
        const user = new User(data);
        const result = await user.save(); // create data in database
        return result;
    }
    catch(error){
        console.log(error);
        return error;
    }
}

const getUser = async(data)=>{
    try{
        const result = await User.find({email:data}).select('email serial password').exec(); // getting only one user
        return result;
    }
    catch(error){
        console.log(error);
        return error;
    }
}

const getUsers = async()=>{
    try{
        const result = await User.find(); // getting all users from database
        return result;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

const updateUser = async(data)=>{
    try{
        const result = await User.updateOne({serial:data.serial},{$set:data}); // updating one user
        return result;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

const deleteUser = async(data)=>{
    try{
        const result = await User.deleteOne({serial:data.serial}); // deleting one user
        return result;
    }
    catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}
/*
types of input of the functions

createUser →
{
    "serial":"1",
    "email":"johndoe@email.com",
    "password":"123456",
    "firstname":"John",
    "lastname":"Doe",
}

getUsers, deleteUser →
{
    serial: "1" //
    email: "test@test.com"
}

updateUser →
{
    "serial":"1",
    "email":"johndoe@newemail.com",
    "password":"123456",
}

*/