import { GraphQLObjectType } from 'graphql'
import { mutations } from './modules/books/mutations/mutations'

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation type',
    fields: () => ({
        ...mutations
    })
})