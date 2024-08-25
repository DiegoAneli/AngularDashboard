const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const User = require('../models/user');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        // logica di autenticazione
      },
    },
  },
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
});
