const {ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");
const {MONGODBTEST, PORT} = require("./config.js");
const {typeDefs} = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({
	typeDefs,
	resolvers
});

mongoose.connect(MONGODBTEST)
	.then(() => {
		console.log("MongoDB connected")
		return server.listen({port: PORT});
	})
	.then(res => {
		console.log(`Server running at ${res.url}`);
	});
