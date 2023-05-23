const BlogPost = require("../../models/BlogPost");

module.exports = {
	Query: {
		async getAllBlogPosts() {
			try {
				const posts = await BlogPost.find({});
				return posts;
			} catch (err) {
				throw new Error(err);
			}
		},
		async getBlogPost(_, args) {
			try {
				const post = await BlogPost.find({_id: args.id});
				return post;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		async createBlogPost(_, args) {
			const post = args.input;
			const res = await BlogPost.create(post);
			return res;
		}
	}
}
