import { GraphQLObjectType } from 'graphql'
import { mutations as BookMutations } from './modules/books/mutations/mutations'
import { mutations as UserMutations } from './modules/users/mutations/mutations'
import { mutations as ReviewMutations } from './modules/reviews/mutations/mutations'
import { mutations as FeedMutations } from './modules/feed/mutations/mutations'

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation type',
    fields: () => ({
        ...BookMutations,
        ...UserMutations,
        ...ReviewMutations,
        ...FeedMutations
    })
})