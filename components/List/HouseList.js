import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const housesQuery = gql`
{
  allHouses{
    id
    address
  }
}
`;

class HouseList extends React.Component {

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('Detail', {
            id: `${item.id}`,
        });
        }}
      >
        <View style={styles.itemInfoContainer}>
          <View style={styles.itemTitleContainer}>
            <Text style={styles.itemTitleText}>{item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Query pollInterval={500} query={housesQuery}>
        {({ loading, error, data }) => {
          if (loading) return (
            <View style={styles.activity}>
              <ActivityIndicator size="large" />
            </View>
          );
          if (error) return (
            <View style={styles.activity}>
              <Text>`Error! ${error.message}`</Text>
            </View>
          );
          return (
            <FlatList
              horizontal
              keyExtractor={this.keyExtractor}
              data={data.allHouses}
              renderItem={this.renderItem}
            />
          );
        }}
      </Query>
    );
  }

}

export default withNavigation(HouseList);

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