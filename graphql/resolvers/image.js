const {createWriteStream} = require('fs');
const {v4: uuidv4} = require('uuid');
const Image = require("../../models/Image");

module.exports = {
	Query: {
		// Get image by id
		async getImage(_, {id}) {
			try {
				const image = await Image.find({_id: id});
				return image;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Upload image
		createImage: async (_, {name, data}) => {
			const id = uuidv4();
			const imagePath = `uploads/${id}.png`;

			const stream = createWriteStream(imagePath);
			stream.write(data, 'base64');
			stream.end();

			const image = new Image({id, name, data: imagePath});
			await image.save();

			return image;
		},
		// Update image by id
		async updateImage(_, {id, input}) {
			try {
				const updatedImage = await Image.findByIdAndUpdate(id, input, {new: true});
				if (!updatedImage) {
					throw new Error('Image not found');
				}
				return updatedImage;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Delete image by id
		async deleteArticle(_, {id}) {
			try {
				const image = await Query.getImage(id);
				const res = await Image.deleteOne(image);
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
	}
}
