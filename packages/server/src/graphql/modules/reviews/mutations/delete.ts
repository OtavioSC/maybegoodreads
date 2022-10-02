import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql'

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { ReviewModel } from '../models/model'
  
  export const ReviewDelete = mutationWithClientMutationId({
    name: 'ReviewDelete',
    inputFields: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    outputFields: {
        deletedCount: {
            type: GraphQLString,
            resolve: response => response.deletedCount
          },
    },
    mutateAndGetPayload: async ({ id }, ctx) => {
  
      const reviewToFind = await ReviewModel.findById(fromGlobalId(id).id)
  
      if (!reviewToFind) {
        throw new Error('This review does not exist on database')
      }

      try {
        const response = await ReviewModel.deleteOne({ _id: reviewToFind.id })
        return response

      } catch {
        throw new Error('Invalid review')
      }
    }
  })