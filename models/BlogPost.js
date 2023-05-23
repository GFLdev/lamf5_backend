const {model, Schema} = require("mongoose");

const postSchema = new Schema({
	title: String,
	updatedAt: {
		type: String,
		default: Date.now
	},
	content: String,
	authors: [String],
	image: String,
	refs: [String]
}, {collection: "blogposts"});

module.exports = model("BlogPost", postSchema);
