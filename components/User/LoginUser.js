import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import UserForm from './UserForm';

class LoginUser extends Component {
    loginUser = async ({email, password}) => {
        try{
            const signin = await this.props.signinUser({
                variables: {email, password}
            });
            console.log(signin.data.signinUser.token);
        } catch(e) {
            console.log(e);
        }
    };


    render() {
        return (
            <View>
                <Text>Login</Text>
                <UserForm
                    onSubmit={this.loginUser}
                    type='Login'
                />
            </View>
        )
    }
}

const signinUser = gql`
    mutation signinUser($email: String!, $password: String!) {
        signinUser(email: {email: $email, password: $password}) {
            token
        }
    }
`;

export default graphql(signinUser, { name: 'signinUser'})(LoginUser);

