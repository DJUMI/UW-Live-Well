import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import { SearchBar, CheckBox } from 'react-native-elements';

import MultiSlider from 'my-react-native-multi-slider';

import HouseList from '../components/HouseList';

export default class HomeScreen extends React.Component {

  state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [3, 7],
    nonCollidingMultiSliderValue: [0, 100],
    search: '',
  };

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

  updateSearch = search => {
    this.setState({ search });
  };

  sliderOneValuesChangeStart = () => {
    this.setState({
      sliderOneChanging: true,
    });
  };

  sliderOneValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      sliderOneValue: newValues,
    });
  };

  sliderOneValuesChangeFinish = () => {
    this.setState({
      sliderOneChanging: false,
    });
  };

  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values,
    });
  };

  nonCollidingMultiSliderValuesChange = values => {
    this.setState({
      nonCollidingMultiSliderValue: values,
    });
  };


  render() {

    const { search } = this.state;


    return (
      <View style={styles.container}>

        <View style={styles.welcomeContainer}>

          <Text style={styles.welcomeText}>Welcome to UW Live Well!</Text>

        </View>

        <View style={styles.searchContainer}>

          <SearchBar
            placeholder="City, Zip, Neighborhood"
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={styles.searchBarContainer}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>


          <ScrollView
            scrollEnabled={this.state.scrollEnabled}
            style={styles.optionsContainer}
          >

            <View style={styles.roomContainer}>
              <CheckBox
                title='Favorites Only'
                checked={true}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
                containerStyle={styles.checkBoxContainer}
              />
              <CheckBox
                title='Available Now'
                checked={true}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
                containerStyle={styles.checkBoxContainer}
              />
            </View>

            <Text style={styles.roomHeader}>Monthly Rent</Text>
            <View style={styles.sliderContainer}>
              <View style={styles.sliderTextContainer1}>
                <Text style={styles.sliderText}>Min</Text>
                <Text style={styles.sliderText}>{this.state.multiSliderValue[0]}</Text>
              </View>
              <MultiSlider
                values={[
                  this.state.multiSliderValue[0],
                  this.state.multiSliderValue[3000],
                ]}
                sliderLength={220}
                onValuesChange={this.multiSliderValuesChange}
                min={0}
                max={3000}
                step={100}
                allowOverlap
                snapped
              //onValuesChangeStart={this.disableScroll}
              //onValuesChangeFinish={this.enableScroll}
              />
              <View style={styles.sliderTextContainer2}>
                <Text style={styles.sliderText}>Max</Text>
                {this.state.multiSliderValue[1] == 3000 ? <Text style={styles.sliderText}>3000+</Text> : <Text style={styles.sliderText}>{this.state.multiSliderValue[1]}</Text>}
              </View>
            </View>

            <Text style={styles.roomHeader}>Available Rooms</Text>

            <View style={styles.roomContainer}>

              <CheckBox
                title='1'
                containerStyle={styles.roomBoxContainer1}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
              <CheckBox
                title='2'
                containerStyle={styles.roomBoxContainer2}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
              <CheckBox
                title='3+'
                containerStyle={styles.roomBoxContainer3}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
            </View>

            <Text style={styles.roomHeader}>Roomate Preference</Text>

            <View style={styles.roomContainer}>

              <CheckBox
                title='Girls only'
                containerStyle={styles.roomBoxContainer1}
                textStyle={styles.roomBoxText}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
              <CheckBox
                title='Guys only'
                containerStyle={styles.roomBoxContainer2}
                textStyle={styles.roomBoxText}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
              <CheckBox
                title='Who cares'
                containerStyle={styles.roomBoxContainer3}
                textStyle={styles.roomBoxText}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
            </View>

            <Text style={styles.roomHeader}>Pets Allowed</Text>

            <View style={styles.roomContainer}>

              <CheckBox
                title='Yes'
                containerStyle={styles.roomBoxContainer1}
                textStyle={styles.roomBoxText}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
              <CheckBox
                title='No'
                containerStyle={styles.roomBoxContainer2}
                textStyle={styles.roomBoxText}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
              <CheckBox
                title='Negotiable'
                containerStyle={styles.roomBoxContainer3}
                textStyle={styles.roomBoxText}
                checkedColor='#36485f'
                uncheckedColor='#6e8099'
              />
            </View>

          </ScrollView>

        </View>

        <View style={styles.listContainer}>

          <Text style={styles.listHeader}>Results</Text>

          <View style={styles.listContainer2}>
            <HouseList
              data={[
                { key: 'Devin' },
              ]}>
            </HouseList>
          </View>
        </View>

      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    paddingTop: 50,
    justifyContent: 'space-between'
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  searchBarContainer: {
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#59cbbd',
    width: 250,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 3,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  listContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 3,
  },
  listHeader: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#36485f',
  },
  listContainer2: {
    height: 120,
  },
  optionsContainer: {
  },
  checkBoxContainer: {
    backgroundColor: '#CAC4CE',
    borderWidth: 0,

  },
  sliderContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#CAC4CE',
    margin: 10,
    borderRadius: 3,
  },
  sliderTextContainer1: {
    alignItems: 'flex-start',
    width: 70,
  },
  sliderTextContainer2: {
    alignItems: 'flex-end',
    width: 70,
  },
  sliderText: {
    color: '#36485f',
    padding: 10,
    fontWeight: 'bold',
  },
  roomHeader: {
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  roomContainer: {
    flexDirection: 'row',
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
  },
});


