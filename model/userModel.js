var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    id: String,
    token: String,
    email: String,
    name: String    
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
