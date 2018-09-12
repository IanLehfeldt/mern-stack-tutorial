//Mongoose Collection for Users
const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//Can be condensed down to
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
});

mongoose.model('users', userSchema);