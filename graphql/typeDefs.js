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

  type Image {
    id: ID!
    name: String!
    data: String!
		type: String!
  }

	type Member {
		id: ID!
		name: String!
		position: Position!
		posts: [Article!]
		linkedin: String
		avatarId: ID
	}

	type Article {
		id: ID!
		title: String!
		updatedAt: String!
		content: String!
		authors: [Member!]!
		refs: [String!]
		imageId: ID
	}

	type Event {
		id: ID!
		updatedAt: String!
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
		imageId: ID
	}

	type Project {
		id: ID!
		status: Boolean!
		content: String!
		imageId: ID
	}

	type Partner {
		id: ID!
		name: String!
		logoId: ID
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
		getImage(id: ID!): Image
	}

	input CreateImageInput {
		name: String!
		data: String!
		type: String!
	}

	input CreateMemberInput {
		name: String
		position: Position
		linkedin: String
		avatarId: ID
	}

	input MemberInput {
		id: ID!
	}

	input CreateArticleInput {
		title: String!
		authors: [MemberInput!]!
		content: String!
		refs: [String!]
		imageId: ID
	}

	input CreateEventInput {
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
		imageId: ID
	}

	input CreateProjectInput {
		status: Boolean!
		content: String!
		imageId: ID
	}

	input CreatePartnerInput {
		name: String!
		logoId: ID
	}

	input UpdateImageInput {
		name: String
		data: String
		type: String
	}

	input UpdateMemberInput {
		name: String
		position: Position
		linkedin: String
		avatarId: ID
	}

	input UpdateArticleInput {
		title: String
		content: String
		refs: [String!]
		imageId: ID
	}

	input UpdateEventInput {
		title: String
		description: String
		local: String
		date: String
		linkToSubscribe: String
		imageId: ID
	}

	input UpdateProjectInput {
		status: Boolean
		content: String
		imageId: ID
	}

	input UpdatePartnerInput {
		name: String
		logoId: ID
	}

	type Mutation {
		createImage(input: CreateImageInput!): Image!
		createEvent(input: CreateEventInput!): Event!
		createArticle(input: CreateArticleInput!): Article!
		createMember(input: CreateMemberInput!): Member!
		createProject(input: CreateProjectInput!): Project!
		createPartner(input: CreatePartnerInput!): Partner!
    updateImage(input: UpdateImageInput, id: ID!): Image!
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
    deleteImage(id: ID!): Image!
	}
`

module.exports = {typeDefs};
