const {model, Schema} = require("mongoose");

const projectSchema = new Schema({
	status: Boolean,
    content: String
}, {collection: "project"});

module.exports = model("Project", projectSchema);