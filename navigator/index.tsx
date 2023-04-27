import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import AllChats from '../screens/AllChats';
import MyChats from '../screens/MyChats';
import Status from '../screens/Status';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted} from '../screens/GetStarted';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const firstTimeUser = false;
  return firstTimeUser ? (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={GetStarted} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={AllChats} />
      <Tab.Screen name="My Chat" component={MyChats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
