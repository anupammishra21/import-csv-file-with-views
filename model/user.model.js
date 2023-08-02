const mongoose = require('mongoose')
const schemae = mongoose.Schema

const crudSchema = schemae({
    file:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    
},{
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('multiinput',crudSchema)