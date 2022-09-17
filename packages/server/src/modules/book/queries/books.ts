import { BookModel } from '../bookModel'
import { BookConnection } from '../bookType'

import { GraphQLFieldConfig, GraphQLFieldConfigArgumentMap, GraphQLString } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'

type Args = GraphQLFieldConfigArgumentMap & {
    title?: string
    description?: string
}

export const books: GraphQLFieldConfig<any, any, Args> = {
    type: BookConnection,
    args: {
        ...connectionArgs,
        title: {
            type: GraphQLString,
            description: ""
        },
        description: {
            type: GraphQLString,
            description: ""
        }
    },
    resolve: async (_, args) => {
        const { title, description, ...connectionArgs } = args

        const filter = {
            ...(title && { title }),
            ...(description && { description })
        }
  
        const booksGroup = await BookModel.aggregate([ { $match: filter } ])
        
        return connectionFromArray(booksGroup, connectionArgs)
    }
}