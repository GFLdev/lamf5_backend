const {gql} = require("apollo-server");

// Defining types, enums, query and mutations
const typeDefs = gql`
	enum Position {
		PRESID
		DIRCOM
		DIRPES
		DIREST
		DIRPRO
		AUXCOM
		AUXPES
		AUXEST
		AUXPRO
		MEMBER
		NOTMEM
	}

	type Member {
		id: ID!
		name: String!
		position: Position!
		posts: [BlogPost!]
	}

	type BlogPost {
		id: ID!
		title: String!
		updatedAt: String!
		content: String!
		authors: [Member!]!
		refs: [String!]
	}

	type Event {
		id: ID!
		updatedAt: String!
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
	}

	type Project {
		id: ID!
		status: Boolean!
		content: String!
	}

	type Partner {
		id: ID!
		name: String!
	}

	type Query {
		getAllEvents: [Event!]!
		getEvent(id: ID!): Event!
		getAllBlogPosts: [BlogPost!]!
		getBlogPost(id: ID!): BlogPost!
		getAllMembers: [Member!]!
		getMember(id: ID!): Member!
		getAllProjects: [Project!]!
		getProject(id: ID!): Project!
		getAllPartners: [Partner!]!
		getPartner(id: ID!): Partner!
	}

	input CreateMemberInput {
		name: String!
		position: Position!
	}

	input MemberInput {
		id: ID!
	}

	input CreateBlogPostInput {
		title: String!
		updatedAt: String!
		authors: [MemberInput!]!
		content: String!
		refs: [String!]
	}

	input CreateEventInput {
		updatedAt: String!
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
	}

	input CreateProjectInput {
		status: Boolean!
		content: String!
	}

	input CreatePartnerInput {
		name: String!
	}

	input UpdateMemberInput {
		name: String!
		position: Position!
	}

	input UpdateBlogPostInput {
		title: String!
		updatedAt: String
		content: String!
		refs: [String!]
	}

	input UpdateEventInput {
		updatedAt: String
		title: String
		description: String
		local: String
		date: String
		linkToSubscribe: String
	}

	input UpdateProjectInput {
		status: Boolean!
		content: String!
	}

	input UpdatePartnerInput {
		name: String!
	}

	type Mutation {
		createEvent(input: CreateEventInput!): Event!
		createBlogPost(input: CreateBlogPostInput!): BlogPost!
		createMember(input: CreateMemberInput!): Member!
		createProject(input: CreateProjectInput!): Project!
		createPartner(input: CreatePartnerInput!): Partner!
		updateEvent(input: UpdateEventInput!, id: ID!): Event!
		updateBlogPost(input: UpdateBlogPostInput!, id: ID!): BlogPost!
		updateMember(input: UpdateMemberInput!, id: ID!): Member!
		updateProject(input: CreateProjectInput!, id: ID!): Project!
		updatePartner(input: CreatePartnerInput!, id: ID!): Partner!
		deleteEvent(id: ID!): Event!
		deleteBlogPost(id: ID!): BlogPost!
		deleteMember(id: ID!): Member!
		deleteProject(id: ID!): Project!
		deletePartner(id: ID!): Partner!
	}
`

module.exports = {typeDefs};