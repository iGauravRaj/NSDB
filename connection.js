const { default: mongoose } = require("mongoose")

const url = "mongodb+srv://admin:rajgraj031@cluster0.cj8meov.mongodb.net/taskBackend?retryWrites=true&w=majority"

const connection = () => {
    mongoose.connect(url).then(() => {
        console.log("Connected Successfully")

    }).catch((error) => {
        console.log("Error in connection ", error)
    })
}

module.exports = connection;