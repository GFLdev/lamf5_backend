const {model, Schema} = require("mongoose");

const partnerSchema = new Schema({
	name: String,
}, {collection: "partner"});

module.exports = model("Partner", partnerSchema);
