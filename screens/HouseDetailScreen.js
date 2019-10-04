import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class HouseDetailScreen extends React.Component {

    render() {
        const { navigation, data } = this.props;
        return (
            <View style={styles.container}>

                <View style={styles.infoContainer}>

                    <Text style={styles.infoText}>House Info</Text>
                    <Text style={styles.infoText}>More Info</Text>
                    <Text style={styles.infoText}>More Info</Text>
                    <Text style={styles.infoText}>More Info</Text>

                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            /* TODO: Navigate to the Details route with params */
                            navigation.navigate('comment', {/* props go here */ });
                        }}>

                        <Text style={styles.buttonText}>Leave a</Text>
                        <Text style={styles.buttonText}>Comment</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonText}>Add to</Text>
                        <Text style={styles.buttonText}>Favorites</Text>

                    </TouchableOpacity>

                </View>


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
    },
    infoContainer: {
        paddingHorizontal: 40,
        justifyContent: 'center',
    },
    infoText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
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
        marginTop: 30,
        width: 135,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});