import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { Review, ReviewModel } from '../models/model'
import { ReviewType, ReviewInputType } from '../models/types';

import { BookModel } from '../../books/models/model';

export const ReviewCreate = mutationWithClientMutationId({
  name: 'ReviewCreate',
  inputFields: {
   ...ReviewInputType
  },
  outputFields: {
    review: {
        type: ReviewType,
        resolve: response => response.review
    }
  },
  mutateAndGetPayload: async({ ...review }: Review, ctx) => {
    const bookId = await BookModel.findOne({ _id: fromGlobalId(review.book).id });

    if (!bookId){
      throw new Error('Book not found')
    }

    try {
      const document = new ReviewModel({ ...review }).save()
      return {
        review: document
      }
    } catch {
      throw new Error('Invalid book')
    }
  }
});