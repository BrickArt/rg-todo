const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

schema.methods.getPublicFields = function () {
    return {
        id: this._id.toString(),
        username: this.username,
        password: this.password
    };
};

exports.User = mongoose.model("User", schema);