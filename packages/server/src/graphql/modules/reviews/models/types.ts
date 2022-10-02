import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLFloat, ThunkObjMap, GraphQLInputFieldConfig} from 'graphql';
import { connectionDefinitions, globalIdField } from 'graphql-relay';

const ReviewType = new GraphQLObjectType({
  name: 'Review',
  description: 'Review Type',
  fields: () => ({
    id: globalIdField('Review'),
    score: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: (review) => review.score,
    },
    user: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (review) => review.user,
    },
    book: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (review) => review.book,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (review) => review.createdAt.toISOString(),
    }
  }),
});

export const ReviewInputType: ThunkObjMap<GraphQLInputFieldConfig> = {
  score: {
    type: GraphQLString,
    description: `Review score`
  },
  user: {
    type: GraphQLString,
    description: `Review user`
  },
  book: {
    type: GraphQLString,
    description: `Review book`
  },
}

const { connectionType: ReviewConnection, edgeType: ReviewEdge } =
  connectionDefinitions({
    nodeType: ReviewType,
  });

export { ReviewConnection, ReviewEdge, ReviewType };