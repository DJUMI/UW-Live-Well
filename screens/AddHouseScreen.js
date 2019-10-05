import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { CheckBox } from 'react-native-elements';

import { Form, Item, Input, Label } from 'native-base';

import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


const createHouse = gql`
    mutation createHouse(
        $address: String!, 
        $zip: Int!, 
        $neighborhood: String, 
        $rent: Int!
        $rooms: Int!
    ) {
        createHouse(
            address: $address,
            zip: $zip,
            neighborhood: $neighborhood,
            rent: $rent,
            rooms: $rooms
        ) {
        id
    }
}
`;


class AddHouseScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          address: '',
          zip: '',
          neighborhood: '',
          rent: '',
          rooms: '',
          pref: '',
          pets: '',
        }
    }

    buttonClickListener = () =>{
        editData = this.state ;
        Alert.alert(editData);
    }

    render() {
        const { navigation } = this.props;
        const { id } = { id: navigation.getParam('id') };
        const { address, zip , neighborhood, rent, rooms, pref, pets}  = this.state;

        const getPref = (pref) => {
            if (pref == 1) return 'Girls Only';
            if (pref == 2) return 'Guys Only';
            return 'None';
        };

        const getPets = (pets) => {
            if (pets == 1) return 'Yes';
            if (pets == 2) return 'No';
            return 'Negotiable';
        };

        return (
            <Form style={styles.container}>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Address
                    </Label>
                    <Input 
                        style={styles.inputText}
                        onChangeText={address => this.setState({address})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Zip Code
                    </Label>
                    <Input 
                        style={styles.inputText}
                        onChangeText={zip => this.setState({zip})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Neighborhood
                    </Label>
                    <Input 
                        style={styles.inputText}
                        onChangeText={neighborhood => this.setState({neighborhood})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Rent
                    </Label>
                    <Input
                        style={styles.inputText}
                        onChangeText={rent => this.setState({rent})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.inputText}>
                        Rooms
                    </Label>
                    <Input
                        style={styles.inputText}
                        onChangeText={rooms => this.setState({rooms})}
                    />
                </Item>
                <Item style={styles.roomContainer}>
                    <CheckBox
                        title='Girls only'
                        containerStyle={styles.roomBoxContainer1}
                        textStyle={styles.roomBoxText}
                        checkedColor='#36485f'
                        uncheckedColor='#6e8099'
                    />
                    <CheckBox
                        title='Guys only'
                        containerStyle={styles.roomBoxContainer2}
                        textStyle={styles.roomBoxText}
                        checkedColor='#36485f'
                        uncheckedColor='#6e8099'
                    />
                    <CheckBox
                        title='Who cares'
                        containerStyle={styles.roomBoxContainer3}
                        textStyle={styles.roomBoxText}
                        checkedColor='#36485f'
                        uncheckedColor='#6e8099'
                    />
                </Item>
                <Item style={styles.roomContainer}>
                    <CheckBox
                        title='Yes'
                        containerStyle={styles.roomBoxContainer1}
                        textStyle={styles.roomBoxText}
                        checkedColor='#36485f'
                        uncheckedColor='#6e8099'
                    />
                    <CheckBox
                        title='No'
                        containerStyle={styles.roomBoxContainer2}
                        textStyle={styles.roomBoxText}
                        checkedColor='#36485f'
                        uncheckedColor='#6e8099'
                    />
                    <CheckBox
                        title='Negotiable'
                        containerStyle={styles.roomBoxContainer3}
                        textStyle={styles.roomBoxText}
                        checkedColor='#36485f'
                        uncheckedColor='#6e8099'
                    />
                </Item>
                <Item style={styles.buttonContainer}>
                    <Mutation mutation={createHouse} variables= {{
                        address: address,
                        zip: parseInt(zip),
                        neighborhood: neighborhood,
                        rent: parseInt(rent),
                        rooms: parseInt(rooms),
                       // pref: parseInt(pref),
                       // pest: parseInt(pets),

                    }}>
                        {createHouse => {
                            return(
                                <TouchableOpacity 
                                style={styles.button}
                                onPress={() => {
                                    this.buttonClickListener;
                                    createHouse();
                                    //navigation.navigate('Profile');
                                }}
                            >
                                <Text style={styles.buttonText}>Add House</Text>
                            </TouchableOpacity>
                            );

                            
                        }}
                    </Mutation>
                </Item>
            </Form>
        );
    }
}

export default withNavigation(AddHouseScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingHorizontal: 10,
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
    roomContainer: {
        marginTop: 10,
        flexDirection: 'row',
        borderBottomWidth: 0,
        marginLeft: 0,
        marginRight: 0,

    },
    roomBoxContainer1: {
        flex: 1,
        marginRight: 3,
        backgroundColor: '#CAC4CE',
        borderWidth: 0,
    },
    roomBoxContainer2: {
        flex: 1,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#CAC4CE',
        borderWidth: 0,
    },
    roomBoxContainer3: {
        flex: 1,
        marginLeft: 3,
        justifyContent: 'center',
        backgroundColor: '#CAC4CE',
        borderWidth: 0,
    },
    roomBoxText: {
        marginLeft: 0,
        fontWeight: '600'
    },
});