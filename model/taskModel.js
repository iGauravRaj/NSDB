const { default: mongoose } = require("mongoose");


const taskSchema = new mongoose.Schema ({
    taskId: {type: String, unique: true, required: true},
    title: {type: String, required: true},
    desc: {type: String},
    dateOfCreation: {type: String},
    userName: {type: String}
})

const taskModel = mongoose.model("taskData", taskSchema);

module.exports = taskModel;