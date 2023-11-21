const {model, Schema} = require("mongoose");

const partnerSchema = new Schema({
	name: String,
	logoId: {
		type: Schema.Types.ObjectId,
		ref: "Image",
	}
}, {collection: "partner"});

module.exports = model("Partner", partnerSchema);
