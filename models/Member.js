const {model, Schema} = require("mongoose");

const memberSchema = new Schema({
	name: String,
	position: String,
	linkedin: String,
	avatarId: {
		type: Schema.Types.ObjectId,
		ref: "Image",
	}
});

module.exports = model("Member", memberSchema);
