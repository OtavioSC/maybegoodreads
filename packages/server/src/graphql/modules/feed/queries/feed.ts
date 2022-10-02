import { GraphQLNonNull, GraphQLID } from 'graphql'
import { fromGlobalId } from 'graphql-relay'
import { FeedType } from '../models/types'
import { FeedModel } from '../models/model'


export const feed = {
    type: FeedType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async (_ : any, args: {id: string }) => {
        return await FeedModel.findOne({ user: fromGlobalId(args.id).id });
    }
}