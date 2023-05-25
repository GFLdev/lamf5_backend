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
		async getProject(_, args) {
			try {
				const project = await Project.findOne({_id: args.id});
				return project;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Mutation: {
		// Create a new project
		async createProject(_, args) {
			try {
				const member = args.input;
				const res = await Project.create(member);
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Update a project by id
		async updateProject(_, args) {
			try {
				const project = args.input;
				const res = await Project.updateOne(
					{
						_id: args.id
					},
					{
						$set: {...project}
					});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		},
		// Delete a project by id
		async deleteProject(_, args) {
			try {
				const res = await Project.findOneAndDelete({_id: args.id});
				return res;
			} catch(err) {
				throw new Error(err);
			}
		}
	}
}
