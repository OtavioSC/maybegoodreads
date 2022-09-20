import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLNonNull, GraphQLID } from 'graphql'
import { Book, BookModel } from '../models/model'
import { BookType } from '../models/types';

export const BookDelete = mutationWithClientMutationId({
  name: 'BookDelete',
  inputFields: {
    id: {
        type: new GraphQLNonNull(GraphQLID)
    }
  },
  outputFields: {
    book: {
        type: BookType,
        resolve: response => response.book
    }
  },
  mutateAndGetPayload: async({ _id }: Book, ctx) => {
    try {
      const book = await BookModel.findOneAndDelete(_id)
      return book

    } catch {
      return {
        error: 'Invalid id'
      }
    }
  }
});