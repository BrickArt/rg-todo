const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  template: {
    type: String,
    required: true
  },
  modified: {
    type: Number,
    required: true
  }
});

schema.methods.getPublicFields = function() {
  return {
    id: this.id,
    name: this.name,
    template: this.template,
    modified: this.modified
  };
};

exports.Template = mongoose.model("Template", schema);
