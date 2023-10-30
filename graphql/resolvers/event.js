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
		async getEvent(_, {id}) {
			try {
				const event = await Event.findOne({_id: id});
				return event;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create new event
		async createEvent(_, {input}) {
			try {
				const event = input;
				const res = await Event.create(event);
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Update a event by id
		async updateEvent(_, {id, input}) {
			try {
				const event = input;
				const res = await Event.updateOne(
					{
						_id: id
					},
					{
						$set: {...event}
					});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Delete a event by id
		async deleteEvent(_, {id}) {
			try {
				const res = await Event.findOneAndDelete({_id: id});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		}
	}
}
