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
		},
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
		async deleteBlogPost(_, args) {
			try{
				const post = await Query.getBlogPost(args.id);
				const res = await BlogPost.deleteOne(post);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		async deleteBlogPost(_, args) {
			try {
				const res = await BlogPost.findOneAndDelete({_id: args.id});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		}
	}
}
