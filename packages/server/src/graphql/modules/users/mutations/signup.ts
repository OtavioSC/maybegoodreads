import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { User, UserModel } from '../models/model'
import { UserType, UserInputType } from '../models/types';

import { generateSaltAndHash } from '../../../../helpers/authentication';

export const UserSignUp = mutationWithClientMutationId({
  name: 'UserSignUp',
  inputFields: {
    ...UserInputType
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: response => response.user
    }
  },
  async mutateAndGetPayload({ ...user }) {
    const findUser = await UserModel.findOne({ email: user.email })

    if(findUser) {
        throw new Error('This e-mail already exists on database')
    }

    try {
        const document = new UserModel({
            name: user.name,
            email: user.email,
            password: generateSaltAndHash(user.password),
        }).save()
        return {
          user: document
        }
      } catch {
         throw new Error('Invalid user')
      }
    }
});