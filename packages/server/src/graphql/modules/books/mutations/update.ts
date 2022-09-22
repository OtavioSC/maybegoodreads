import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay';
import { Book, BookModel } from '../models/model'
import { BookType, BookInputType } from '../models/types';

export const BookUpdate = mutationWithClientMutationId({
  name: 'BookUpdate',
  inputFields: {
    id: {
        type: new GraphQLNonNull(GraphQLID)
      },
       ...BookInputType
    
  },
  outputFields: {
    book: {
        type: BookType,
        resolve: response => response.book
    }
  },
  mutateAndGetPayload: async({ ...BookInputType }: Book, ctx) => {

    try {
        const bookUpdated = await BookModel.findByIdAndUpdate(BookInputType._id, {
            title: BookInputType.title,
            description: BookInputType.description,
            author: BookInputType.author,
            score: BookInputType.score,
            image: BookInputType.image,
        });
      return {
        book: bookUpdated
      }
    } catch {
      return {
        error: 'Invalid book'
      }
    }
  }
});