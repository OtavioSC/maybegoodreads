import { GraphQLObjectType } from 'graphql'
import { queries as BookQueries} from './modules/books/queries/queries'
import { queries as ReviewQueries} from './modules/reviews/queries/queries'

export const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Query type',
    fields: () => ({
        ...BookQueries,
        ...ReviewQueries
    })
})