import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Form, Item, Input, Label } from 'native-base';


export default class EditProfileScreen extends React.Component {
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Form style={styles.container}>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Username
                    </Label>
                    <Input style={styles.inputText}/>
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Profile Info
                    </Label>
                    <Input style={styles.inputText}/>
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        New Password
                    </Label>
                    <Input style={styles.inputText}/>
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Confirm Password
                    </Label>
                    <Input style={styles.inputText}/>
                </Item>
                <Item style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </Item>
            </Form>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#36485f',
        paddingTop: 10,
        paddingHorizontal: 30,
        paddingBottom: 40,
        alignItems: 'center',
    },
    inputText: {
        color: 'white',
    },
    buttonContainer: {
        borderBottomWidth: 0,
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