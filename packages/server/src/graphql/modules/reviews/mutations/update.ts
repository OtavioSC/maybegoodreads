import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLFloat
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { ReviewModel } from '../models/model';
import { ReviewType } from '../models/types';

export const ReviewUpdate = mutationWithClientMutationId({
  name: 'ReviewUpdate',
  inputFields: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: `Review Id`
      },
      score: {
        type: GraphQLFloat,
        description: `Review score`
      },
  },
  outputFields: {
    review: {
        type: ReviewType,
        resolve: response => response.review
    }
  },

  mutateAndGetPayload: async({ ...review }, ctx) => {
    const reviewToFind = await ReviewModel.findById(fromGlobalId(review.id).id)

    if (!reviewToFind) {
      throw new Error('This review does not exist on database')
    }

    try {
      const reviewToUpdate = await ReviewModel.findByIdAndUpdate(reviewToFind!._id, {
        $set: {
          ...review
        }
      }, { new: true })

      return {
        review: reviewToUpdate
      }
    } catch (error) {
      throw new Error('Error to update')
    }
  }
});