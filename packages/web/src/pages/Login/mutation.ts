import { graphql } from 'react-relay'

export const UserLoginMutation = graphql`
  mutation UserLogin($input: UserLoginInput!) {
    UserLogin (input: $input) {
      token
  } `