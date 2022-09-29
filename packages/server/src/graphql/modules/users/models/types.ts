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
  name: {
    type: GraphQLString,
    description: `User name`
  },
  email: {
    type: GraphQLString,
    description: `User email`
  },
  password: {
    type: GraphQLString,
    description: `User password`
  },
}

const { connectionType: UserConnection, edgeType: UserEdge } =
  connectionDefinitions({
    nodeType: UserType,
  });

export { UserConnection, UserEdge, UserType };