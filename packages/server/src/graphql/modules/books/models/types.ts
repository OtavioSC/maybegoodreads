import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLFloat} from 'graphql';
import { connectionDefinitions, globalIdField } from 'graphql-relay';

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Book Type',
  fields: () => ({
    id: globalIdField('Book'),
    title: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (book) => book.title,
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (book) => book.description,
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (book) => book.author,
    },
    score: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: (book) => book.score,
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (book) => book.image,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (book) => book.createdAt.toISOString(),
    }
  }),
});

const { connectionType: BookConnection, edgeType: BookEdge } =
  connectionDefinitions({
    nodeType: BookType,
  });

export { BookConnection, BookEdge, BookType };