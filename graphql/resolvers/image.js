const Image = require("../../models/Image");

module.exports = {
	Query: {
		// Get image by id
		async getImage(_, {id}) {
			try {
				const image = await Image.findOne({_id: id});
				return image;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Upload image
		createImage: async (_, {input}) => {
			try {
				const image = input;
				const res = await Image.create(image);
				return res;
			} catch (err) {
				throw new Error(err);
			}
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
		async deleteImage(_, {id}) {
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
