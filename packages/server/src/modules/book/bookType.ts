import {
    GraphQLNonNull,
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInputFieldConfig, 
    ThunkObjMap 
} from 'graphql';

import { connectionDefinitions, globalIdField }from 'graphql-relay'
import { BookModel } from './bookModel';

import { nodeInterface } from '../../graphql/nodeInterface'
import { entityRegister } from '../../graphql/entityHelpers'

export const bookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Book type',
    interfaces: () => [nodeInterface],
    fields: () => ({
        id: globalIdField('Book', book => book._id),
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book title",
            resolve: book => book.title
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book description",
            resolve: book => book.description
        },
        score: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book description",
            resolve: book => book.description
        },
        image: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book Image",
            resolve: book => book.image
        }, 
        createdAt: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book created date",
            resolve: book => book.createdAt
        }
    })
})

export const bookInputType: ThunkObjMap<GraphQLInputFieldConfig> = {
    title: {
        type: new GraphQLNonNull(GraphQLString),
        description: "Book title",
    },
    description: {
        type: new GraphQLNonNull(GraphQLString),
        description: "Book description",
    },
    score: {
        type: new GraphQLNonNull(GraphQLString),
        description: "Book description",
    },
    image: {
        type: new GraphQLNonNull(GraphQLString),
        description: "Book Image",
    }, 
}

export const { connectionType: BookConnection, edgeType: BookEdge } = connectionDefinitions({
    nodeType: bookType
})

entityRegister({
    type: bookType,
    nodeResolver: async (id) => await BookModel.findById(id)
  })