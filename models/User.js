const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type : String,
        required:[true, 'Please add a name']
    },
    email: {
        type: String,
        required:[true, 'please add email'],
        unique: True
    }
},
{
    timesStamp: true
})

module.exports = mongoose.Model('User', userSchema)