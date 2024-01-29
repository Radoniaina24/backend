const User = require('../models/userModel')
const getUsers = (req, res) =>{
    res.json({message:"liste des utilisateurs"})
}
async function postUser(req, res){
    const {name, email} = req.body
    try {
          const user = await User.create({name, email})
          res.status(200).json({user})
    }catch (err){
        res.status(400).json({ error : err.message})
    }
}

module.exports = {
    getUsers,
    postUser
}