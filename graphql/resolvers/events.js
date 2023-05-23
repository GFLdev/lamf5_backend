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
			try {
				const event = args.input;
				const res = await Event.create(event);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		async updateEvent(_, args) {
			try {
				const event = args.input;
				const res = await Event.updateOne(
					{
						_id: args.id
					},
					{
						$set: {...event}
					});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		async deleteEvent(_, args) {
			try {
				const res = await Event.findOneAndDelete({_id: args.id});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		}
	}
}
