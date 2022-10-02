import { mutationWithClientMutationId } from 'graphql-relay';
import { Book, BookModel } from '../models/model'
import { BookType, BookInputType } from '../models/types';

export const BookCreate = mutationWithClientMutationId({
  name: 'BookCreate',
  inputFields: {
   ...BookInputType
  },
  outputFields: {
    book: {
        type: BookType,
        resolve: response => response.book
    }
  },
  mutateAndGetPayload: async({ ...book }: Book, ctx) => {
    try {
      const document = new BookModel({ ...book }).save()
      return {
        book: document
      }
    } catch {
      throw new Error('Invalid book')
    }
  }
});