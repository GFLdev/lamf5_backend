const Member = require("../../models/Member");

module.exports = {
	Query: {
		// Get members list
		async getAllMembers() {
			try {
				const members = await Member.find({});
				return members;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Get one member by id
		async getMember(_, {id}) {
			try {
				const member = await Member.findOne({_id: id});
				return member;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new member
		async createMember(_, {input}) {
			try {
				const member = input;
				const res = await Member.create(member);
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Update a member by id
		async updateMember(_, {id, input}) {
			try {
				const member = input;
				const res = await Member.updateOne(
					{
						_id: id
					},
					{
						$set: {...member}
					});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Delete a member by id
		async deleteMember(_, {id}) {
			try {
				const res = await Member.findOneAndDelete({_id: id});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		}
	}
}
