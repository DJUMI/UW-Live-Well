import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class EditProfileScreen extends React.Component {
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Your new username"
                placeholderTextColor='white' />
                <TextInput style={styles.textInput} placeholder="Your new profile info"
                placeholderTextColor='white' />
                <TextInput style={styles.textInput} placeholder="Your new password"
                placeholderTextColor='white' />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>  
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#36485f',
        paddingTop: 60,
        paddingHorizontal: 60,
        paddingBottom: 40,
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
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        width: 150,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});