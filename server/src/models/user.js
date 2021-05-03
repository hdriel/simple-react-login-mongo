const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

UserSchema.index({ email: 1 }, { unique: true });

UserSchema
    .virtual('name')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    });

const UserModel = mongoose.model('users', UserSchema, 'users');


module.exports.registerUser = function(userData) {
    return new UserModel(userData).save();
}

module.exports.getUserByEmail = function(email) {
    return UserModel.find({ email }).lean();
}