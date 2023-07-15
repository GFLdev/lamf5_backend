const Article = require("../../models/Article");

module.exports = {
	Query: {
		// Get all articles
		async getAllArticles() {
			try {
				const articles = await Article.find({});
				return articles;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Get one article by id
		async getArticle(_, args) {
			try {
				const article = await Article.find({_id: args.id});
				return article;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new article
		async createArticle(_, args) {
			const article = args.input;
			const res = await Article.create(article);
			return res;
		},
		// Update an article by id
		async updateArticle(_, args) {
			try {
				const article = args.input;
				const res = await Article.updateOne(
					{
						_id: args.id
					},
					{
						$set: {...article}
					});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Delete an article by id
		async deleteArticle(_, args) {
			try{
				const article = await Query.getArticle(args.id);
				const res = await Article.deleteOne(article);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
	}
}
