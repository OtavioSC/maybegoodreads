import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLFloat, ThunkObjMap, GraphQLInputFieldConfig} from 'graphql';
import { connectionDefinitions, globalIdField } from 'graphql-relay';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: () => ({
    id: globalIdField('User'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.name,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.email,
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.username,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.password,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (book) => book.createdAt.toISOString(),
    }
  }),
});

export const UserInputType: ThunkObjMap<GraphQLInputFieldConfig> = {
  title: {
    type: GraphQLString,
    description: `Book title`
  },
  description: {
    type: GraphQLString,
    description: `Book description`
  },
  author: {
    type: GraphQLString,
    description: `Book author`
  },
  score: {
    type: GraphQLFloat,
    description: `Book score`
  },
  image: {
    type: GraphQLString,
    description: `Book image`
  },
}

const { connectionType: UserConnection, edgeType: UserEdge } =
  connectionDefinitions({
    nodeType: UserType,
  });

export { UserConnection, UserEdge, UserType };