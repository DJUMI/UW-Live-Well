import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default class LogInScreen extends React.Component {
    render() {
        const { navigation, data } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.logform}>

                    <View style={styles.header}>

                        <Text style={styles.headerText}>UW-Live Well</Text>

                    </View>

                    <TextInput style={styles.textInput} placeholder="Your Username"
                        placeholderTextColor='white' />

                    <TextInput style={styles.textInput} placeholder="Your Password"
                        secureTextEntry={true} placeholderTextColor='white' />

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                            onPress={() => {
                                /* TODO: Navigate to the Details route with params */
                                navigation.navigate('Sign Up', {/* props go here */ });
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingHorizontal: 60,
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