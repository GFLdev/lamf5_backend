const {model, Schema} = require("mongoose");

const eventSchema = new Schema({
	updatedAt: {
		type: String,
		default: Date.now
	},
	title: String,
	description: String,
	local: String,
	date: String,
	linkToSubscribe: String,
	image: String,
}, {collection: "events"});

module.exports = model("Event", eventSchema);
