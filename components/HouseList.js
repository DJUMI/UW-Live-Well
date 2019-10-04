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
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


class HouseList extends React.Component {
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
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('Detail', {});
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
  


  /*const { loading, error, fuck } = useQuery(housesQuery);

  if (error) return `Error! ${error}`;

  if (!loading) {
    console.log(loading);
    console.log(fuck);
  }

*/

  //const { loading } = this.state;
  //const { data } = this.props;


  //if (loading) return null;


  //return null;

  render() {
    return (
      <Query query={housesQuery}>
        {(response, error) => {
          if (error) {
            console.log('Response Error-------', error);
            return <Text style={styles.errorText}>{error}</Text>
          }
          //If the response is done, then will return the FlatList
          if (response) {
            console.log('response-data-------------', response);
            //Return the FlatList if there is not an error.
            return <FlatList
              horizontal
              data={response.data.allHouses}
              renderItem={(item) => this._renderItem(item)}
            />;
          }
        }}
      </Query>
     
    );
  }
  


}
const housesQuery = gql`
{
  allHouses{
    address
  }
}
`;

export default HouseList;

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