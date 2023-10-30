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
		async getArticle(_, {id}) {
			try {
				const article = await Article.find({_id: id});
				return article;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new article
		async createArticle(_, {input}) {
			const article = input;
			const res = await Article.create(article);
			return res;
		},
		// Update an article by id
		async updateArticle(_, {id, input}) {
			try {
				const article = input;
				const res = await Article.updateOne(
					{
						_id: id
					},
					{
						$set: {...article}
					});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Delete an article by id
		async deleteArticle(_, {id}) {
			try {
				const article = await Query.getArticle(id);
				const res = await Article.deleteOne(article);
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
	}
}
