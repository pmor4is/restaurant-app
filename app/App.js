import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import { RestaurantsProvider } from './src/context/RestaurantContext';
import ViewRestaurant from './src/screens/ViewRestaurant';
import CreateRestaurant from './src/screens/CreateRestaurant';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RestaurantsProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#85A16D',
              height: 110,
              justifyContent: 'flex-end',
              paddingBottom: 20,
              alignItems: 'center',
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: '700',
              color: '#fff',
            },
            headerTintColor: '#FFFFFF'
          }}
        >
          <Stack.Screen 
            name='homePage' 
            component={HomeScreen} 
            options={{ title: 'Home' }} 
          />
          <Stack.Screen 
            name='viewRestaurant' 
            component={ViewRestaurant} 
            options={{ title: 'Restaurante' }}
          />
          <Stack.Screen 
            name='createRestaurant' 
            component={CreateRestaurant} 
            options={{ title: 'Criar Restaurante' }}
          />
        </Stack.Navigator>
      </RestaurantsProvider>
    </NavigationContainer>
  );
}