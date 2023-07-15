const {model, Schema} = require("mongoose");

const memberSchema = new Schema({
	name: String,
	position: String,
	linkedin: String,
	avatar: String
});

module.exports = model("Member", memberSchema);
