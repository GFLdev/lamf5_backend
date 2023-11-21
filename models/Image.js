const {model, Schema} = require("mongoose");

const imageSchema = new Schema({
	name: String,
	data: String,
	type: String
});

module.exports = model("Image", imageSchema);
