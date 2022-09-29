import { GraphQLObjectType } from 'graphql'
import { mutations as BookMutations } from './modules/books/mutations/mutations'
import { mutations as UserMutations } from './modules/users/mutations/mutations'

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation type',
    fields: () => ({
        ...BookMutations,
        ...UserMutations
    })
})