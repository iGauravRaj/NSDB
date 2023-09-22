//To control the user CRUD

const userModel = require("../model/userModel")
const encryptdecrypt = require("../utils/bcrypt");


const loginController = async (request,response) => {
    try {
        const {email, password} = request.body; // Original Password

        const user = await userModel.findOne({email: email}); // Hashed/Encrypted Password
        if (user && user._id) {
            if (encryptdecrypt.matchPwd(password, user.password)) {
                response.status(200).json({message: "Login Sucessfull"})
            }
            else {
                response.status(403).json({message: "Invalid Password"})
            }
        }
        else {
            response.status(404).json({message: "User not found"})
        }
    }
    catch (error) {
        response.status(500).json({message:"Internal Server Error"})
    }
}

const registerController = async(request,response) => {
    try {
        //request had two things it's header and it's body, when we send data using postman
        //we sends the data through body in json format.
        const {username,email,password} = request.body;

        const encryptPwd = encryptdecrypt.encryptPwd(password)

        const user = await userModel.create({
            email: email,
            username: username,
            password: encryptPwd
        })    //or can use user.save()

        if(user && user._id) {
            response.status(201).json({message: "User Registered Successfully"})
        }
        else {
            response.status(404).json({message: "User Not Registered"})
        }

    } catch (error) {
        response.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {loginController, registerController}