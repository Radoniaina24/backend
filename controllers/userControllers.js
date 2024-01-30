const User = require('../models/userModel')
async function getUsers(req, res){
    let users
    try{
        users = await User.find()
    }catch (err){
        res.status(400).json({ error : err.message})
    }
    res.status(200).json({users})
}
async function getOneUser(req, res){
    const uid = req.params.uid
    let user
    try{
        user = await User.find({ _id: uid})
    }catch (err){
        res.status(400).json({ error : err.message})
    }
    res.status(200).json({user})
}
async function postUser(req, res){
    const {name, email} = req.body
    try {
        const user = await new User({ name, email});
        await user.save()
        // OR
        // const user = await User.create({name, email})
        res.status(200).json({user})

    }catch (err){
        res.status(400).json({ error : err.message})
    }
}
async function deleteUser(req, res){
    const uid = req.params.uid
    try{
        await User.deleteOne({ _id: uid})
    }catch (err){
        res.status(400).json({ error : err.message})
    }
    res.status(200).json({message : "success"})
}
async function updateUser(req, res){
    const uid = req.params.uid
    const {name, email} = req.body
    let user
    const query = { _id : uid}
    try{
        user = await User.findOneAndUpdate(query, {name, email})
    }catch (err){
        res.status(400).json({ error : err.message})
    }
    res.status(200).json({user})
}

module.exports = {
    getUsers,
    postUser,
    getOneUser,
    deleteUser,
    updateUser
}