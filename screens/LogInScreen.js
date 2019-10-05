import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { Item, Input, Label } from 'native-base';
import gql from 'graphql-tag';
import { withNavigation } from 'react-navigation';
import { Mutation } from 'react-apollo';
import { signIn } from '../loginUtils';

const signinUser = gql`
    mutation signinUser($email: String!, $password: String!) {
        signinUser(email: {email: $email, password: $password}) {
            token
        }
    }
`;

class LogInScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          id: ''
        }
    }

    render() {
        const { navigation, data } = this.props;
        const { email, password, id } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.logform}>

                    <View style={styles.header}>

                        <Text style={styles.headerText}>UW-Live Well</Text>

                    </View>
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



                    <View style={styles.buttonContainer}>
                        <Mutation mutation={signinUser} variables={{
                            email: email,
                            password: password,
                        }}>
                            {signinUser => {
                            return(
                                <TouchableOpacity 
                                style={styles.button}
                                onPress={() => {
                                    signinUser();
                                    signIn(signin.data.signinUser.token);
                                    /*navigation.navigate('Profile', {
                                        id: id
                                    });*/
                                }}
                            >
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>
                            );
                        }}
                        </Mutation>

                        <TouchableOpacity style={styles.button}
                            onPress={() => {
                                navigation.navigate('Sign Up');
                            }}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

LogInScreen.navigationOptions = {
    header: null,
};

export default withNavigation(LogInScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingHorizontal: 60,
    },
    inputText: {
        color: 'white',
    },
    logform: {
        alignSelf: 'stretch',
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 5,
    },
    inputContainer: {
        marginBottom: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'white',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        width: 120,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});