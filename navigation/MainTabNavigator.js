import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import UserHouseDetailScreen from '../screens/UserHouseDetailScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddHouseScreen from '../screens/AddHouseScreen';
import HouseDetailScreen from '../screens/HouseDetailScreen.js';
import CommentScreen from '../screens/CommentScreen';
import EditHouseScreen from '../screens/EditHouseScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: HouseDetailScreen,
    comment: CommentScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
  ),
};

HomeStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Links: ProfileScreen,
    uDetail: UserHouseDetailScreen,
    editProfile: EditProfileScreen,
    addHouse: AddHouseScreen,
    editHouse: EditHouseScreen,
    addHouse: AddHouseScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const LogInStack = createStackNavigator(
  {
    Links: LogInScreen,
    'Sign Up': SignUpScreen,
  },
  config
);

LogInStack.navigationOptions = {
  tabBarLabel: 'Log In',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LogInStack.path = '';

const SignUpStack = createStackNavigator(
  {
    Links: SignUpScreen,
  },
  config
);

SignUpStack.navigationOptions = {
  tabBarLabel: 'Sign Up',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

SignUpStack.path = '';

EditProfileScreen.navigationOptions = {
  title: 'editProfile',
  headerStyle: {
    backgroundColor: '#CAC4CE',
  },
  headerTitleStyle: {
    color: '#CAC4CE',
  },
};

AddHouseScreen.navigationOptions = {
  title: 'addHouse',
  headerStyle: {
    backgroundColor: '#CAC4CE',
  },
  headerTitleStyle: {
    color: '#CAC4CE',
  },
};

EditHouseScreen.navigationOptions = {
  title: 'editHouse',
  headerStyle: {
    backgroundColor: '#CAC4CE',
  },
  headerTitleStyle: {
    color: '#CAC4CE',
  },
};

const UserHouseDetailStack = createStackNavigator(
  {
    Links: UserHouseDetailScreen,
    editHouse: EditHouseScreen,
  },
  config
);

UserHouseDetailScreen.navigationOptions = {
  title: 'uDetail',
  headerStyle: {
    backgroundColor: '#CAC4CE',
  },
  headerTitleStyle: {
    color: '#CAC4CE',
  },
};

const HouseDetailStack = createStackNavigator(
  {
    Links: HouseDetailScreen,
    comment: CommentScreen,
  },
  config
);

HouseDetailScreen.navigationOptions = {
  title: 'Detail',
  headerStyle: {
    backgroundColor: '#CAC4CE',
  },
  headerTitleStyle: {
    color: '#CAC4CE',
  },
};

CommentScreen.navigationOptions = {
  title: 'comment',
  headerStyle: {
    backgroundColor: '#CAC4CE',
  },
  headerTitleStyle: {
    color: '#CAC4CE',
  },
};

const tabNavigator = createBottomTabNavigator({

  HomeStack,
  ProfileStack,
  LogInStack,
  SignUpStack,
  HouseDetailStack,
  UserHouseDetailStack,
});

const NavWarpper = (props) => {
  return <Login />
  return <tabNavigator />

}

tabNavigator.path = '';

export default tabNavigator;
