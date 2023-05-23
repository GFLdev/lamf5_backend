const BlogPostsResolvers = require("./blogPosts");
const MembersResolvers = require("./members");
const EventsResolvers = require("./events");

module.exports = {
	Query: {
		...BlogPostsResolvers.Query,
		...MembersResolvers.Query,
		...EventsResolvers.Query
	},
	Mutation: {
		...BlogPostsResolvers.Mutation,
		...MembersResolvers.Mutation,
		...EventsResolvers.Mutation
	}
}
