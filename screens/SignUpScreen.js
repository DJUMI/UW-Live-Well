import React from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


export default class SignUpScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.regform}>

                    <Text style={styles.header}>Registration</Text>

                    <TextInput style={styles.textInput} placeholder="Your Username"
                        placeholderTextColor='white' />

                    <TextInput style={styles.textInput} placeholder="Your Email"
                        placeholderTextColor='white' />

                    <TextInput style={styles.textInput} placeholder="Your Password"
                        secureTextEntry={true} placeholderTextColor='white' />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }

}

SignUpScreen.navigationOptions = {
    header: null,
};

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
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'white',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
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
