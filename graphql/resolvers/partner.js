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
		async getPartner(_, {id}) {
			try {
				const partner = await Partner.findOne({_id: id});
				return partner;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new partner
		async createPartner(_, {input}) {
			try {
				const partner = input;
				const res = await Partner.create(partner);
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Update a partner by id
		async updatePartner(_, {id, input}) {
			try {
				const partner = input;
				const res = await Partner.updateOne(
					{
						_id: id
					},
					{
						$set: {...partner}
					});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Delete a partner by id
		async deletePartner(_, {id}) {
			try {
				const res = await Partner.findOneAndDelete({_id: id});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		}
	}
}
