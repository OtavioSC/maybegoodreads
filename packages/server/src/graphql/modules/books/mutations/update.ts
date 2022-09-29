import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLFloat
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { Book, BookModel } from '../models/model'
import { BookType, BookInputType } from '../models/types';

export const BookUpdate = mutationWithClientMutationId({
  name: 'BookUpdate',
  inputFields: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: `Book Id`
      },
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
  },
  outputFields: {
    book: {
        type: BookType,
        resolve: response => response.book
    }
  },

  mutateAndGetPayload: async({ ...book }, ctx) => {
    const bookToFind = await BookModel.findById(fromGlobalId(book.id).id)

    try {
      const bookToUpdate = await BookModel.findByIdAndUpdate(bookToFind!._id, {
        $set: {
          ...book
        }
      }, { new: true })

      return {
        book: bookToUpdate
      }
    } catch (error) {
      throw new Error('Error to update')
    }
  }
});