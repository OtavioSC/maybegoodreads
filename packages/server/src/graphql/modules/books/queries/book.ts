import { BookConnection } from '../models/types'
import { BookModel } from '../models/model'

import { GraphQLFieldConfig } from 'graphql'
import { connectionArgs } from 'graphql-relay'

export const books: GraphQLFieldConfig<any, any, any> = {
    type: BookConnection,
    args: connectionArgs,
    resolve: async (_: any, args: { id: string }) => {
        return await BookModel.findOne({_id: args.id})
    }
}