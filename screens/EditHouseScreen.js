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
import { Query, Mutation } from 'react-apollo';

const houseQuery = gql`
    query HouseQuery($id: ID!) {
        House(id: $id) {
            address
            available
            favorite
            neighborhood
            pets
            pref
            rent
            rooms
            zip
        }
    }
`;

const editHouse = gql`
    mutation updateHouse(
        $id: ID!, 
        $address: String, 
        $zip: Int, 
        $neighborhood: String, 
        $rent: Int
        $rooms: Int
    ) {
        updateHouse(
            id: $id, 
            address: $address,
            zip: $zip,
            neighborhood: $neighborhood,
            rent: $rent,
            rooms: $rooms
        ) {
            id
        }
    }
`


class EditHouseScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          address: '',
          zip: '',
          neighborhood: '',
          rent: '',
          rooms: '',
        }
    }

    buttonClickListener = () =>{
        editData = this.state ;
        Alert.alert(editData);
    }

    render() {
        const { navigation } = this.props;
        const { id } = { id: navigation.getParam('id') };
        const { address, zip , neighborhood, rent, rooms}  = this.state;

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
            <Query query={houseQuery} pollInterval={500} variables={{ id: id }}>
                {({ loading, error, data }) => {
                    if (loading) return (
                        <View>
                            <ActivityIndicator size="large" />
                        </View>
                    );
                    if (error) return (
                        <View>
                            <Text>`Error! ${error.message}`</Text>
                        </View>
                    );
                    return (
                        <Form style={styles.container}>
                            <Item>
                                <Input
                                    placeholder={data.House.address}
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    onChangeText={address => this.setState({address})}
                                />
                            </Item>
                            <Item>
                                <Input
                                    placeholder={data.House.zip}
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    onChangeText={zip => this.setState({zip})} 
                                />
                            </Item>
                            <Item>
                                <Input
                                    placeholder={data.House.neighborhood}
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    onChangeText={neighborhood => this.setState({neighborhood})}
                                />
                            </Item>
                            <Item>
                                <Input
                                    placeholder={data.House.rent}
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    onChangeText={rent => this.setState({rent})}
                                />
                            </Item>
                            <Item>
                                <Input
                                    placeholder={data.House.rooms}
                                    placeholderTextColor='white'
                                    style={styles.inputText}
                                    onChangeText={rooms => this.setState({rooms})} 
                                />
                            </Item>
                            <Item style={styles.roomContainer}>
                                <CheckBox
                                    checked={data.House.pref==1}
                                    title='Girls only'
                                    containerStyle={styles.roomBoxContainer1}
                                    textStyle={styles.roomBoxText}
                                    checkedColor='#36485f'
                                    uncheckedColor='#6e8099'
                                />
                                <CheckBox
                                    checked={data.House.pref==2}
                                    title='Guys only'
                                    containerStyle={styles.roomBoxContainer2}
                                    textStyle={styles.roomBoxText}
                                    checkedColor='#36485f'
                                    uncheckedColor='#6e8099'
                                />
                                <CheckBox
                                    checked={data.House.pref==3}
                                    title='Who cares'
                                    containerStyle={styles.roomBoxContainer3}
                                    textStyle={styles.roomBoxText}
                                    checkedColor='#36485f'
                                    uncheckedColor='#6e8099'
                                />
                            </Item>
                            <Item style={styles.roomContainer}>
                                <CheckBox
                                    checked={data.House.pets==1}
                                    title='Yes'
                                    containerStyle={styles.roomBoxContainer1}
                                    textStyle={styles.roomBoxText}
                                    checkedColor='#36485f'
                                    uncheckedColor='#6e8099'
                                />
                                <CheckBox
                                    checked={data.House.pets==2}
                                    title='No'
                                    containerStyle={styles.roomBoxContainer2}
                                    textStyle={styles.roomBoxText}
                                    checkedColor='#36485f'
                                    uncheckedColor='#6e8099'
                                />
                                <CheckBox
                                    checked={data.House.pets==3}
                                    title='Negotiable'
                                    containerStyle={styles.roomBoxContainer3}
                                    textStyle={styles.roomBoxText}
                                    checkedColor='#36485f'
                                    uncheckedColor='#6e8099'
                                />
                            </Item>

                            <Item style={styles.buttonContainer}>
                                <Mutation mutation={editHouse} variables={{ 
                                    id: id,
                                    address: address,
                                    zip: parseInt(zip),
                                    neighborhood: neighborhood,
                                    rent: parseInt(rent),
                                    rooms: parseInt(rooms),
                                }}>
                                    {editHouse => (
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                this.buttonClickListener;
                                                editHouse();
                                                /*navigation.navigate('uDetail', {
                                                    id: id,
                                                });*/
                                            }}
                                        >
                                            <Text style={styles.buttonText}>Save</Text>
                                        </TouchableOpacity>
                                    )}
                                </Mutation>
                            </Item>
                        </Form>
                    );
                }}
            </Query>
        );
    }
}

export default withNavigation(EditHouseScreen);

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