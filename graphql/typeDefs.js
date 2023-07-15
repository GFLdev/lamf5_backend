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
		posts: [Article!]
		linkedin: String
		avatar: String
	}

	type Article {
		id: ID!
		title: String!
		updatedAt: String!
		content: String!
		authors: [Member!]!
		refs: [String!]
		image: String
	}

	type Event {
		id: ID!
		updatedAt: String!
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
		image: String
	}

	type Project {
		id: ID!
		status: Boolean!
		content: String!
		image: String
	}

	type Partner {
		id: ID!
		name: String!
		logo: String
	}

	type Query {
		getAllEvents: [Event!]!
		getEvent(id: ID!): Event!
		getAllArticles: [Article!]!
		getArticle(id: ID!): Article!
		getAllMembers: [Member!]!
		getMember(id: ID!): Member!
		getAllProjects: [Project!]!
		getProject(id: ID!): Project!
		getAllPartners: [Partner!]!
		getPartner(id: ID!): Partner!
	}

	input CreateMemberInput {
		name: String
		position: Position
		linkedin: String
		avatar: String
	}

	input MemberInput {
		id: ID!
	}

	input CreateArticleInput {
		title: String!
		authors: [MemberInput!]!
		content: String!
		refs: [String!]
		image: String
	}

	input CreateEventInput {
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
		image: String
	}

	input CreateProjectInput {
		status: Boolean!
		content: String!
		image: String
	}

	input CreatePartnerInput {
		name: String!
		logo: String
	}

	input UpdateMemberInput {
		name: String
		position: Position
		linkedin: String
		avatar: String
	}

	input UpdateArticleInput {
		title: String
		content: String
		refs: [String!]
		image: String
	}

	input UpdateEventInput {
		title: String
		description: String
		local: String
		date: String
		linkToSubscribe: String
		image: String
	}

	input UpdateProjectInput {
		status: Boolean
		content: String
		image: String
	}

	input UpdatePartnerInput {
		name: String
		logo: String
	}

	type Mutation {
		createEvent(input: CreateEventInput!): Event!
		createArticle(input: CreateArticleInput!): Article!
		createMember(input: CreateMemberInput!): Member!
		createProject(input: CreateProjectInput!): Project!
		createPartner(input: CreatePartnerInput!): Partner!
		updateEvent(input: UpdateEventInput!, id: ID!): Event!
		updateArticle(input: UpdateArticleInput!, id: ID!): Article!
		updateMember(input: UpdateMemberInput!, id: ID!): Member!
		updateProject(input: CreateProjectInput!, id: ID!): Project!
		updatePartner(input: CreatePartnerInput!, id: ID!): Partner!
		deleteEvent(id: ID!): Event!
		deleteArticle(id: ID!): Article!
		deleteMember(id: ID!): Member!
		deleteProject(id: ID!): Project!
		deletePartner(id: ID!): Partner!
	}
`

module.exports = {typeDefs};