import { GraphQLNonNull, GraphQLObjectType, GraphQLString, ThunkObjMap, GraphQLInputFieldConfig} from 'graphql';
import { connectionDefinitions, globalIdField } from 'graphql-relay';

const FeedType = new GraphQLObjectType({
  name: 'Feed',
  description: 'Feed Type',
  fields: () => ({
    id: globalIdField('Feed'),
    title: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (feed) => feed.title,
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (feed) => feed.description,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (feed) => feed.createdAt.toISOString(),
    }
  }),
});

export const FeedInputType: ThunkObjMap<GraphQLInputFieldConfig> = {
  title: {
    type: GraphQLString,
    description: `Feed title`
  },
  description: {
    type: GraphQLString,
    description: `Feed description`
  },
}

const { connectionType: FeedConnection, edgeType: FeedEdge } =
  connectionDefinitions({
    nodeType: FeedType,
  });

export { FeedConnection, FeedEdge, FeedType };