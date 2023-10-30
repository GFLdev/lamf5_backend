const Project = require("../../models/Project");

module.exports = {
	Query: {
		// Get projects list
		async getAllProjects() {
			try {
				const projects = await Project.find({});
				return projects;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Get one project by id
		async getProject(_, {id}) {
			try {
				const project = await Project.findOne({_id: id});
				return project;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new project
		async createProject(_, {input}) {
			try {
				const member = input;
				const res = await Project.create(member);
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Update a project by id
		async updateProject(_, {id, input}) {
			try {
				const project = input;
				const res = await Project.updateOne(
					{
						_id: id
					},
					{
						$set: {...project}
					});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		},
		// Delete a project by id
		async deleteProject(_, {id}) {
			try {
				const res = await Project.findOneAndDelete({_id: id});
				return res;
			} catch (err) {
				throw new Error(err);
			}
		}
	}
}
