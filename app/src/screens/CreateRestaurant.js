import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function CreateRestaurant() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  
  navigation = useNavigation();

  const handleCreateRestaurant = async () => {
    try {
      const response = await axios.post('https://restaurant-app-server-eta.vercel.app/restaurants', {
        name,
        categories,
        address,
        description,
      });
      
      console.log('Restaurante criado com sucesso:', response.data);
      navigation.navigate('homePage')
      // Aqui você pode adicionar uma navegação para a lista de restaurantes
      // por exemplo: navigation.navigate('RestaurantList');
    } catch (error) {
      console.error('Erro ao criar restaurante:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Restaurante</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Restaurante"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Categorias (separadas por vírgula)"
        onChangeText={setCategories}
        value={categories}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={setAddress}
        value={address}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        onChangeText={setDescription}
        value={description}
        multiline
      />

      <Button title="Criar Restaurante" onPress={handleCreateRestaurant} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
});