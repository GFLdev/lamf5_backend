const {model, Schema} = require("mongoose");

const articleSchema = new Schema({
	title: String,
	updatedAt: {
		type: String,
		default: Date.now
	},
	content: String,
	authors: [String],
	refs: [String],
	imageId: {
		type: Schema.Types.ObjectId,
		ref: "Image",
	}
}, {collection: "articles"});

module.exports = model("Article", articleSchema);
