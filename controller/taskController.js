const taskModel = require('../model/taskModel');


// Create
app.post('/api/createtask', async (req, res) => {

    const {taskId, title, desc, dateOfCreation, userName} = req.body;
    try {
        const taskResponse = await taskModel.create({
            taskId: taskId,
            title: title,
            desc: desc,
            dateOfCreation: dateOfCreation,
            userName: userName
        })

        if (taskResponse && taskResponse._id) {
            res.status(201).json({message: "Task Created Successfully"})
        }
        else {
            res.status(404).json({message: "Task not created"});
        }

    } catch (error) {
        res.status(500).json({message: error});
    }

})

// Update
app.put('/api/update', async (req, res) => {

})

// Delete
app.delete('/api/delete', async (req, res) => {

})