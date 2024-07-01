import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen (props){
  navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Guia de Restaurantes!</Text>
      <Text style={styles.subtitle}>Encontre os melhores restaurantes da cidade.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('restaurantList')}
      >
        <Text style={styles.buttonText}>Ver Restaurantes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('createRestaurant')}
      >
        <Text style={styles.buttonText}>Cadastrar Restaurante</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#85A16D',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});