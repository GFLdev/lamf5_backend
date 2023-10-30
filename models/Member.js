const {model, Schema} = require("mongoose");

const memberSchema = new Schema({
	name: String,
	position: String,
	linkedin: String,
});

module.exports = model("Member", memberSchema);
