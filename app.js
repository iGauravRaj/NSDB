const express = require('express');
const connection = require('./connection');
const userRoutes = require('./routes/userRoutes')
const app = express();
connection();
app.use(express.json());

app.use(express.static('public'))

app.use('/api', userRoutes)



app.listen(1234, (error) => {
    if(error) {
        console.log(error);
    }
    else {
        console.log("Server Started at http://localhost:1234")
    }
})