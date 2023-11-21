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
	imageId: {
		type: Schema.Types.ObjectId,
		ref: "Image",
	}
}, {collection: "events"});

module.exports = model("Event", eventSchema);
