const {model, Schema} = require("mongoose");

const projectSchema = new Schema({
	status: Boolean,
	content: String,
	imageId: {
		type: Schema.Types.ObjectId,
		ref: "Image",
	}
}, {collection: "project"});

module.exports = model("Project", projectSchema);
