const mongoose = require('mongoose')

let contactSchema =mongoose.Schema({
    firstname : {type:String, required:true},
    lastname :  {type:String, required:true},
    email : {type:String, required:true, unique:true},
    homeaddress: {type:String, required:true},
    description: {type:String, required:true},
    number: {type:Number, required:true}
  
})

let contactModel = mongoose.model("student", contactSchema)

module.exports = contactModel