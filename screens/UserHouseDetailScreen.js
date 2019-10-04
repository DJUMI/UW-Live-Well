import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class UserHouseDetailScreen extends React.Component {
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
    
                <View style={styles.infoContainer}>
    
                    <Text style={styles.infoText}>House Info</Text>
                    <Text style={styles.infoText}>More Info</Text>
                    <Text style={styles.infoText}>More Info</Text>
                    <Text style={styles.infoText}>More Info</Text>
    
                </View>
                
                <View style={styles.buttonContainer}>
    
                        <TouchableOpacity style={styles.button}>
    
                            <Text style={styles.buttonText}>Edit Info</Text>
    
                        </TouchableOpacity>
    
                        <TouchableOpacity style={styles.button}>
    
                            <Text style={styles.buttonText}>Delete House</Text>
    
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
    },
});