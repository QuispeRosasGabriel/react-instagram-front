import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const Register = gql`
    mutation signup($input:UserCredentials!) {
        signup (input: $input)
    }
`

export const RegisterMutation = ({children}) => {
    return (
        <Mutation mutation={Register}>
            {children}
        </Mutation>
    )
};