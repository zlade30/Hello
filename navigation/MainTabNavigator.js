import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Nature1 from '../screens/Nature1';
import Nature2 from '../screens/Nature2';
import Nature3 from '../screens/Nature3';
import Nature4 from '../screens/Nature4';
import Nature5 from '../screens/Nature5';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Nature1: Nature1,
    Nature2: Nature2,
    Nature3: Nature3,
    Nature4: Nature4,
    Nature5: Nature5
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack
});

tabNavigator.path = '';

export default tabNavigator;
