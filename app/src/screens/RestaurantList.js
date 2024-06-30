import React from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';

import Header from '../components/Header';
import Card from '../components/RestaurantCard';

const restaurants = [
  {
    name: 'voley',
    categories: 'lanche pizza',
    address: 'rua mato grosso 384',
    id: 1,
  },
  {
    name: 'glutton',
    categories: 'pipipi popopo',
    address: 'rua nao sei',
    id: 2,
  },
  {
    name: 'indy',
    categories: 'cigarro e cachaça',
    address: 'rua dos bobo n0',
    id: 3,
  },
];

export default function RestaurantList() {
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
