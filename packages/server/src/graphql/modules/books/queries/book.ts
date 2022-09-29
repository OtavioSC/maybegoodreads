import { BookType } from '../models/types'

import { GraphQLNonNull, GraphQLID } from 'graphql'
import { BookModel } from '../models/model'

import { fromGlobalId } from 'graphql-relay'


export const book = {
    type: BookType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async (_ : any, args: {id: string }) => {
        await BookModel.findOne({ _id: fromGlobalId(args.id).id });
    }
}