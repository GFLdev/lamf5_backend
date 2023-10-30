const {ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");
const {typeDefs} = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");
require("dotenv").config()

const server = new ApolloServer({
	typeDefs,
	resolvers
});

mongoose.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("MongoDB connected")
		return server.listen({port: process.env.MONGODB_PORT});
	})
	.then(res => {
		console.log(`Server running at ${res.url}`);
	});
