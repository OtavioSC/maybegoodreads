import { graphql } from 'react-relay'

export const UserSignUpMutation = graphql`
  mutation UserSignUp($input: UserSignUpInput!) {
    UserSignUp (input: $input) {
      user {
        name
        email
      }
  } `