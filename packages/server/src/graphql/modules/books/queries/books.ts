import { BookConnection } from '../models/types'
import { BookModel } from '../models/model'

import { GraphQLFieldConfig } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'

export const books: GraphQLFieldConfig<any, any, any> = {
    type: BookConnection,
    args: connectionArgs,
    resolve: async (_, args) => {
        const amountOfBooks = await BookModel.find({})
        return connectionFromArray(amountOfBooks, args)
    }
}