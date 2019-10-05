import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from 'react-native';

import { Card, CardItem, Body, Text } from 'native-base';
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

const deleteHouse = gql`
  mutation deleteHouse($id: ID!) {
    deleteHouse(id: $id) {
      id
    }
  }
`;

class UserHouseDetailScreen extends React.Component {
    



    render() {
        const { navigation } = this.props;
        const { id } = { id: navigation.getParam('id') };

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
            <Query query={houseQuery} variables={{ id: id }}>
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
                        <View style={styles.container}>
                            <Card style={styles.infoContainer}>
                                <CardItem style={styles.bodyContainer}>
                                    <Body>
                                        <Text style={styles.headerText}>Address</Text>
                                        <Text style={styles.infoText}>{data.House.address}</Text>
                                        <Text style={styles.headerText}>Zip</Text>
                                        <Text style={styles.infoText}>{data.House.zip}</Text>
                                        <Text style={styles.headerText}>Neighborhood</Text>
                                        <Text style={styles.infoText}>{data.House.neighborhood}</Text>
                                        <Text style={styles.headerText}>Rent</Text>
                                        <Text style={styles.infoText}>{data.House.rent}</Text>
                                        <Text style={styles.headerText}>Rooms</Text>
                                        <Text style={styles.infoText}>{data.House.rooms}</Text>
                                        <Text style={styles.headerText}>Roomate Preference</Text>
                                        <Text style={styles.infoText}>{getPref(data.House.pref)}</Text>
                                        <Text style={styles.headerText}>Pets</Text>
                                        <Text style={styles.infoText}>{getPets(data.House.pets)}</Text>
                                        <Text style={styles.headerText}>Comment</Text>
                                        <Text style={styles.infoText}>{data.House.comment}</Text>
                                    </Body>
                                </CardItem>
                            </Card>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        navigation.navigate('editHouse', {
                                            id: id,
                                        });
                                    }}>
                                    <Text style={styles.buttonText}>Edit Info</Text>
                                </TouchableOpacity>

                                <Mutation mutation={deleteHouse} variables={{ id: id }}>
                                    {deleteHouse => (
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                deleteHouse();
                                                this.props.navigation.goBack();
                                            }}
                                        >
                                            <Text style={styles.buttonText}>Delete House</Text>
                                        </TouchableOpacity>
                                    )}
                                </Mutation>
                            </View>
                        </View>
                    );
                }}
            </Query >
        );
    }
}

export default withNavigation(UserHouseDetailScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingTop: 10,
    },
    infoContainer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    bodyContainer: {
        backgroundColor: '#CAC4CE',
    },
    headerText: {
        color: '#36485f',
        fontSize: 10,
    },
    infoText: {
        color: '#36485f',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 30,

    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 20,
        width: 135,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});