const {model, Schema} = require("mongoose");

const memberSchema = new Schema({
	name: String,
	position: String
});

module.exports = model("Member", memberSchema);
