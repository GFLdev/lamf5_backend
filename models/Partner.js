const {model, Schema} = require("mongoose");

const partnerSchema = new Schema({
    name: String,
    logo: String
}, {collection: "partner"});

module.exports = model("Partner", partnerSchema);