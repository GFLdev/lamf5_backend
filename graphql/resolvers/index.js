const ArticleResolvers = require("./article");
const MemberResolvers = require("./member");
const EventResolvers = require("./event");
const ProjectResolvers = require("./project");
const PartnerResolvers = require("./partner");
const ImageResolvers = require("./image");

// Importing all the resolvers (queries and mutations)
// then exporting all of them together as one query object and one mutation object
module.exports = {
	Query: {
		...ArticleResolvers.Query,
		...MemberResolvers.Query,
		...EventResolvers.Query,
		...ProjectResolvers.Query,
		...PartnerResolvers.Query,
		...ImageResolvers.Query
	},
	Mutation: {
		...ArticleResolvers.Mutation,
		...MemberResolvers.Mutation,
		...EventResolvers.Mutation,
		...ProjectResolvers.Mutation,
		...PartnerResolvers.Mutation,
		...ImageResolvers.Mutation
	}
}
