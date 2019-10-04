import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import { withNavigation } from 'react-navigation';

class UserHouseList extends React.Component {
  state = {
    isLoadingComplete: true,
  }

  componentDidMount = async () => {
    this.setState(
      {
        isLoadingComplete: true,
      },
    );
  }

  renderItem = ({ item }) => {
    const { navigation, data } = this.props;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          /* TODO: Navigate to the Details route with params */
          navigation.navigate('uDetail', {/* props go here */});
        }}
      >
        <View style={styles.itemInfoContainer}>
          <View style={styles.itemTitleContainer}>
            <Text style={styles.itemTitleText}/* TODO */>Item Title</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { isLoadingComplete } = this.state;
    const { data } = this.props;
    if (isLoadingComplete) {
      return (
        <FlatList
          data={data}
          horizontal
          renderItem={this.renderItem}
        />  
      );
    }
  }
}

export default withNavigation(UserHouseList);

const styles = StyleSheet.create({
  itemContainer: {
   flex: 1,
   paddingTop: 5,
   alignItems: 'center',
   justifyContent: 'center',
  },
  itemInfoContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  imageContainer: {
    borderRadius: 15,
    width: 150,
    height: 150,
  },
  itemTitleContainer: {
    alignItems: 'center',
    width: 150,
  },
  itemTitleText: {
    fontSize: 20,
    padding: 5,
    color: '#36485f',
  }
})