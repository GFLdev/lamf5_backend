const Member = require("../../models/Member");

module.exports = {
	Query: {
		async getAllMembers() {
			try {
				const members = await Member.find({});
				return members;
			} catch (err) {
				throw new Error(err);
			}
		},
		async getMember(_, args) {
			try {
				const member = await Member.findOne({_id: args.id});
				return member;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		async createMember(_, args) {
			const member = args.input;
			const res = await Member.create(member);
			return res;
		},
		async updateMember(_, args) {
			const member = args.input;
			console.log(_id);
			const res = await Member.updateOne(
				{
					_id: args.id
				},
				{
					$set: {...member}
				});
			return res;
		}
	}
}
