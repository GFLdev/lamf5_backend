const Partner = require("../../models/Partner");

module.exports = {
	Query: {
		// Get partners list
		async getAllPartners() {
			try {
				const partners = await Partner.find({});
				return partners;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Get one partner by id
		async getPartner(_, args) {
			try {
				const partner = await Partner.findOne({_id: args.id});
				return partner;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new partner
		async createPartner(_, args) {
			try {
				const partner = args.input;
				const res = await Partner.create(partner);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Update a partner by id
		async updatePartner(_, args) {
			try {
				const partner = args.input;
				const res = await Partner.updateOne(
					{
						_id: args.id
					},
					{
						$set: {...partner}
					});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Delete a partner by id
		async deletePartner(_, args) {
			try {
				const res = await Partner.findOneAndDelete({_id: args.id});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		}
	}
}
