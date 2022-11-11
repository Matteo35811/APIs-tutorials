const mongoose = require("mongoose"); //import mongoose

// user schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: {type: String, required: true}
    client: Number
    tecnico: Number,
    amministratore: Number,
    supervisore: Number,
    comments: [{ text: String, date: { type: String, default: new Date() } }]
});

const User = mongoose.model('User', UserSchema); //convert to model named User
module.exports = User; //export for controller use
