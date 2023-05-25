const Event = require("../../models/Event");

module.exports = {
	Query: {
		// Get events list
		async getAllEvents() {
			try {
				const events = await Event.find({});
				return events;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Get one event by id
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
		// Create new event
		async createEvent(_, args) {
			try {
				const event = args.input;
				const res = await Event.create(event);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Update a event by id
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
		// Delete a event by id
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
