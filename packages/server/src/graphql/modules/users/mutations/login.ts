import { GraphQLNonNull, GraphQLString, Token } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserModel } from '../models/model'

import { compareHashSync, gerenateToken } from '../../../../helpers/authentication';

export const UserLogin = mutationWithClientMutationId({
  name: 'UserLogin',
  inputFields: {
    email: { 
        type: new GraphQLNonNull(GraphQLString) 
    },
    password: { 
        type: new GraphQLNonNull(GraphQLString) 
    },
  },
  outputFields: {
    token: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: response => response.token
    }
  },
  async mutateAndGetPayload({ ...user }) {
    const findUser = await UserModel.findOne({ email: user.email })

    if(!findUser) {
         throw new Error('This e-mail does not exist on database');
    }

    const comparePassword = await compareHashSync(user.password, findUser.password)

    if(!comparePassword) {
        throw new Error('Invalid password');
    }
    return {
        token: gerenateToken(findUser)
    }
  }
});