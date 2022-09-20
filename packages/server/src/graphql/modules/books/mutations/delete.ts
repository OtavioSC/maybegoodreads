import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql'
  import { BookModel } from '../models/model'
  import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
  
  export const BookDelete = mutationWithClientMutationId({
    name: 'bookDelete',
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
  
      const bookToFind = await BookModel.findById(fromGlobalId(id).id)
  
      if (!bookToFind) {
        return {
          error: 'This Book does not exist on database'
        }
      }

      try {
        const response = await BookModel.deleteOne({
          _id: bookToFind.id
        })
  
        return response
      } catch {
        return { 
            error: "Error"
         }
      }
    }
  })