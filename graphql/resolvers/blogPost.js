const BlogPost = require("../../models/BlogPost");

module.exports = {
	Query: {
		// Get all posts from blog
		async getAllBlogPosts() {
			try {
				const posts = await BlogPost.find({});
				return posts;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Get one post, by id, from blog
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
		// Create a new blog post
		async createBlogPost(_, args) {
			const post = args.input;
			const res = await BlogPost.create(post);
			return res;
		},
		// Update a blog post by id
		async updateBlogPost(_, args) {
			try {
				const post = args.input;
				const res = await BlogPost.updateOne(
					{
						_id: args.id
					},
					{
						$set: {...post}
					});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Delete a blog post by id
		async deleteBlogPost(_, args) {
			try{
				const post = await Query.getBlogPost(args.id);
				const res = await BlogPost.deleteOne(post);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
	}
}
