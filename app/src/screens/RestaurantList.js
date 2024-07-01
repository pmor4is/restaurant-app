import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import Card from '../components/RestaurantCard';

import axios from 'axios';


export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://restaurant-app-server-eta.vercel.app/restaurants'); // Replace with your API endpoint
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header label="Food Central" /> */}
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
});
