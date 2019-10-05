import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import UserHouseList from '../components/List/UserHouseList';

import { withNavigation } from 'react-navigation';

export default class ProfileScreen extends React.Component {

    render() {
        const { navigation, data } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Username</Text>

                    <Text style={styles.info}>Profile Info</Text>

                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            /* TODO: Navigate to the Details route with params */
                            navigation.navigate('editProfile', {/* props go here */ });
                    }}>
                        <Text style={styles.buttonText}>Edit Info</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.listHeader}>Your Houses</Text>

                    <View style={styles.listContainer2}>
                        <UserHouseList />
                    </View>

                    <TouchableOpacity style={styles.button2}
                        onPress={() => {
                            /* TODO: Navigate to the Details route with params */
                            navigation.navigate('addHouse', {/* props go here */ });
                        }}>

                        <Text style={styles.buttonText}>Add House</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

ProfileScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#36485f',
        paddingTop: 50,
    },
    infoContainer: {
        justifyContent: 'flex-start',
        paddingHorizontal: 60,
    },
    info: {
        color: 'white',
        paddingVertical: 10,
        fontSize: 20,
    },
    button: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 50,
        width: 250,
        borderRadius: 3,
    },
    listContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 10,
        borderRadius: 3,
    },
    listHeader: {
        color: '#36485f',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listContainer2: {
        height: 200,
    },
    button2: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        width: 250,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});