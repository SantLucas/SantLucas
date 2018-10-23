const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true
    },
});

module.exports = User = mongoose.model('users', UserSchema);