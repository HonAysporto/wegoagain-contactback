//List of imports

const express = require('express')
const app = express()
require('dotenv').config()
let contactRouter = require("./routes/contacts.route")
const mongoose = require('mongoose')
const cors = require('cors')






//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/contact', contactRouter)

let URI = "mongodb+srv://Honourable:Password@cluster0.guyvfqs.mongodb.net/contacts_db?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).then(() => {
    console.log('mongodb connected successfully');
}).catch((err) => {
    console.log('mongodb no gree connect')
    console.log(err);
})

let PORT = process.env.PORT;




app.listen(PORT, () => {
    console.log('App is listening at PORT: ' + PORT );
})