const Event = require("../../models/Event");

module.exports = {
	Query: {
		async getAllEvents() {
			try {
				const events = await Event.find({});
				return events;
			} catch (err) {
				throw new Error(err);
			}
		},
		async getEvent(_, args) {
			try {
				const event = await Event.findOne({_id: args.id});
				return event;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		async createEvent(_, args) {
			const event = args.input;
			const res = await Event.create(event);
			return res;
		}
	}
}
