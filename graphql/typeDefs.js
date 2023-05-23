const {gql} = require("apollo-server");

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
		photo: String
		position: Position!
	}

	type BlogPost {
		id: ID!
		title: String!
		updatedAt: String!
		content: String!
		authors: [Member!]!
		image: String
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
		image: String
	}

	type Query {
		getAllEvents: [Event!]!
		getEvent(id: ID!): Event!
		getAllBlogPosts: [BlogPost!]!
		getBlogPost(id: ID!): BlogPost!
		getAllMembers: [Member!]!
		getMember(id: ID!): Member!
	}

	input CreateMemberInput {
		name: String!
		photo: String
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
		image: String
		refs: [String!]
	}

	input CreateEventInput {
		updatedAt: String!
		title: String!
		description: String!
		local: String!
		date: String!
		linkToSubscribe: String
		image: String
	}

	input UpdateMemberInput {
		name: String
		photo: String
		position: Position
	}

	input UpdateBlogPostInput {
		title: String
		updatedAt: String
		content: String
		image: String
		refs: [String!]
	}

	input UpdateEventInput {
		updatedAt: String
		title: String
		description: String
		local: String
		date: String
		linkToSubscribe: String
		image: String	
	}

	type Mutation {
		createEvent(input: CreateEventInput!): Event!
		createBlogPost(input: CreateBlogPostInput!): BlogPost!
		createMember(input: CreateMemberInput!): Member!
		updateEvent(input: UpdateEventInput!, id: ID!): Event!
		updateBlogPost(input: UpdateBlogPostInput!, id: ID!): BlogPost!
		updateMember(input: UpdateMemberInput!, id: ID!): Member!
		deleteEvent(id: ID!): Event!
		deleteBlogPost(id: ID!): BlogPost!
		deleteMember(id: ID!): Member!
	}
`

module.exports = {typeDefs};