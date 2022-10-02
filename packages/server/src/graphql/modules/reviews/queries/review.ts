import { GraphQLNonNull, GraphQLID } from 'graphql'
import { fromGlobalId } from 'graphql-relay'
import { ReviewModel } from '../models/model'
import { ReviewType } from '../models/types'

export const review = {
    type: ReviewType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async (_ : any, args: {id: string }) => {
        return await ReviewModel.findOne({ _id: fromGlobalId(args.id).id });
    }
}