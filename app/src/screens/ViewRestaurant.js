import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ViewRestaurant({ route }) {
  const { info } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{info.name}</Text>
      <View>
        <TouchableHighlight
          style={styles.viewRestaurant}
          onPress={() => navigation.navigate('restaurantList')} // Navegue para a tela do restaurante
        >
          <Text style={styles.viewRestaurantText}>Ver restaurante</Text>
        </TouchableHighlight>

      </View>
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewRestaurant: {
    backgroundColor: '#85A16D',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  viewRestaurantText: {
    color: '#FFF',
    textAlign: 'center',
  }
});