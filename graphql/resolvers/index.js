const BlogPostResolvers = require("./blogPost");
const MemberResolvers = require("./member");
const EventResolvers = require("./event");
const ProjectResolvers = require("./project");
const PartnerResolvers = require("./partner");

// Importing all the resolvers (queries and mutations)
// then exporting all of them together as one query object and one mutation object
module.exports = {
	Query: {
		...BlogPostResolvers.Query,
		...MemberResolvers.Query,
		...EventResolvers.Query,
		...ProjectResolvers.Query,
		...PartnerResolvers.Query
	},
	Mutation: {
		...BlogPostResolvers.Mutation,
		...MemberResolvers.Mutation,
		...EventResolvers.Mutation,
		...ProjectResolvers.Mutation,
		...PartnerResolvers.Mutation
	}
}
