import { GraphQLObjectType } from 'graphql'
import { queries } from './modules/books/queries/queries'

export const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Query type',
    fields: () => ({
        ...queries
    })
})