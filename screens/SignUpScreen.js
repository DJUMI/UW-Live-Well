import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Item, Input, Label } from 'native-base';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withNavigation } from 'react-navigation';
import { signIn } from '../loginUtils';


const createUser = gql`
    mutation createUser($email: String!, $password: String!) {
        createUser(authProvider: { email: { email: $email, password: $password } }) {
            id
        }
    }
`;

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          id: ''
        }
    }

    render() {
        const { navigation } = this.props;
        const { email, password, id } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.regform}>
                    <Text style={styles.header}>Registration</Text>

                    <View style={styles.inputContainer}>
                        <Item floatingLabel>
                            <Label style={styles.inputText}>Email</Label>
                            <Input
                                style={styles.inputText}
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </Item>
                    </View>

                    <Item floatingLabel>
                        <Label style={styles.inputText}>Password</Label>
                        <Input
                            style={styles.inputText}
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </Item>

                    <Mutation mutation={createUser} variables={{
                        email: email,
                        password: password
                    }}>
                        {createUser => {
                            return(
                                <TouchableOpacity 
                                style={styles.button}
                                onPress={() => {
                                    console.log(email);
                                    createUser();
                                    signIn(signin.data.signinUser.token);
                                    /*navigation.navigate('Profile', {
                                        id: id
                                    });*/
                                }}
                            >
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                            );
                        }}
                    </Mutation>
                </View>
            </View>
        );
    }
}

SignUpScreen.navigationOptions = {
    header: null,
};

export default withNavigation(SignUpScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CAC4CE',
        paddingHorizontal: 60,
    },
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 5,
    },
    inputContainer: {
        marginBottom: 10,
    },
    inputText: {
        color: 'white',
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
