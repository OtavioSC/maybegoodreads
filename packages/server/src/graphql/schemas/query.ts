import { GraphQLObjectType } from 'graphql'

import { bookQueries } from '../../modules/book/queries/queries'
import { nodeField, nodesField } from '../nodeInterface'

export const query = new GraphQLObjectType({
    name: 'Query',
    description: 'The root query type',
    fields: () => ({
        ...bookQueries,
        node: nodeField,
        nodes: nodesField
    })
})