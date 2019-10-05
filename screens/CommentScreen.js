import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const addComment = gql`
    mutation updateHouse($id: ID!, $comment: String!) {
        updateHouse(id: $id, comment: $comment) {
            id
        }
    }
`

export default class CommentScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          TextInputValue: ''
        }
    }

    buttonClickListener = () =>{
        TextInputValue = this.state ;
        Alert.alert(TextInputValue);
    }

    render() {
        const { navigation } = this.props;
        const { id } = { id: navigation.getParam('id') };
        const { TextInputValue }  = this.state ;

        return (
            <Form style={styles.container}>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Your comment
                    </Label>
                    <Input
                        style={styles.inputText}
                        onChangeText={TextInputValue => this.setState({TextInputValue})}
                    />
                </Item>

                <Item style={styles.buttonContainer}>

                    <Mutation mutation={addComment} variables={{ id: id, comment: TextInputValue }}>
                        {addComment => (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.buttonClickListener;
                                    addComment();
                                    navigation.navigate('Detail', {
                                        id: id,
                                    });
                                }}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>

                        )}

                    </Mutation>
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