import { bookType } from '../bookType'
import { BookModel } from '../bookModel'

import { GraphQLFieldConfig, GraphQLID, GraphQLNonNull } from 'graphql'
import { fromGlobalId } from 'graphql-relay'

export const book: GraphQLFieldConfig<any, any, any> = {
  type: bookType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (_, args) => {
    const { id } = fromGlobalId(args.id)
    return await BookModel.findOne({ _id: id })
  }
}