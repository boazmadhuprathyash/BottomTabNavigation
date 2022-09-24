import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Update from './screens/Update';
import Profile from './screens/Profile';
import Call from './screens/Call';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: 'blue',
          }}  >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Update"
                component={Update}
                options={{
                  tabBarLabel: 'Update',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                  ),
                  tabBarBadge: 3,
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}
              />
                 <Tab.Screen
                name="Call"
                component={Call}
                options={{
                  tabBarLabel: 'Call',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="phone" color={color} size={size} />
                  ),
                }}
              /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}