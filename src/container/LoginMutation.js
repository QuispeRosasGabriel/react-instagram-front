import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const Login = gql`
    mutation login($input:UserCredentials!) {
        login (input: $input)
    }
`

export const LoginMutation = ({children}) => {
    return (
        <Mutation mutation={Login}>
            {children}
        </Mutation>
    )
};