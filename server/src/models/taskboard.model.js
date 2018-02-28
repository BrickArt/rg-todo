const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tasks: [
        {
            title: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            }
        }
    ]
});

schema.methods.getPublicFields = function () {
    return {
        id: this._id.toString(),
        user_id: this.user_id,
        title: this.title,
        tasks: this.tasks
    };
};

exports.Taskboard = mongoose.model("Taskboard", schema);