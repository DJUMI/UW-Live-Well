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
            comment
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

const addFav = gql`
    mutation updateHouse($id: ID!, $favorite: Boolean!) {
        updateHouse(id: $id, favorite: $favorite) {
            id
        }
    }
`

class HouseDetailScreen extends React.Component {

    render() {
        const { navigation } = this.props;
        const { id } = { id: navigation.getParam('id') };
        var yep = new Boolean(true);

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

        const getFavorite = (fav) => {
            if (fav) return 'Yes';
            return 'No';
        }

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
                                        <Text style={styles.headerText}>Favorite</Text>
                                        <Text style={styles.infoText}>{getFavorite(data.House.favorite)}</Text>
                                    </Body>
                                </CardItem>
                            </Card>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        navigation.navigate('comment', {
                                          id: id,
                                      });
                                    }}
                                >
                                    <Text style={styles.buttonText}>Leave a Comment</Text>
                                </TouchableOpacity>

                                <Mutation mutation={addFav} variables={{ id: id, favorite: true }}>
                                    {addFav => (
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress ={() => {
                                                addFav();
                                            }}
                                        >
                                            <Text style={styles.buttonText}>Add to Favorites</Text>
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

export default withNavigation(HouseDetailScreen);

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
        marginBottom: 4,
        marginTop: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 10,

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