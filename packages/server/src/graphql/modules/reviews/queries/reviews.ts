import { GraphQLFieldConfig } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'
import { ReviewModel } from '../models/model'
import { ReviewConnection } from '../models/types'

export const reviews: GraphQLFieldConfig<any, any, any> = {
    type: ReviewConnection,
    args: connectionArgs,
    resolve: async (_, args) => {
        const amountOfBooks = await ReviewModel.find({})
        return connectionFromArray(amountOfBooks, args)
    }
}