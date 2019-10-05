import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import CreateUser from './CreateUser';
import LoginUser from './LoginUser';
import { Button } from 'native-base';

export default class Login extends Component {
    state = {
        register: true,
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.regitster ? <CreateUser /> : <LoginUser />}
                <Button
                    onPress={() => this.setState({
                        register: !this.state.register
                    })}
                    title={this.state.register ? 'Login' : 'Register'}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});