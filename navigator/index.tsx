import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import AllChats from '../screens/AllChats';
import MyChats from '../screens/MyChats';
import Status from '../screens/Status';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted} from '../screens/GetStarted';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const firstTimeUser = true;

  return firstTimeUser ? (
    <Stack.Navigator>
      <Stack.Screen name="Get Started" component={GetStarted} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={AllChats}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="web" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Chat"
        component={MyChats}
        options={{
          tabBarLabel: 'My Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="message-reply-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: 'Status',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
