import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, Alert } from 'react-native';

const plants = [
  {
    id: '1',
    name: 'Succulent',
    sort: 'succulent',
    waterInterval: 5,
    photo: require('../assets/plants/Succulent.png'),
  },
  {
    id: '2',
    name: 'Crested Opuntia',
    sort: 'cactus',
    waterInterval: 7,
    photo: require('../assets/plants/Crested Opuntia.png'),
  },
  {
    id: '3',
    name: 'echinocactus grusonii',
    sort: 'cactus',
    waterInterval: 10,
    photo: require('../assets/plants/echinocactus grusonii.png'),
  },
  {
    id: '4',
    name: 'Trichocereus spachianus',
    sort: 'cactus',
    waterInterval: 7,
    photo: require('../assets/plants/Trichocereus spachianus.png'),
  },
];

export default function PlantsScreen() {
  const [myPlants, setMyPlants] = useState([]);

  const handleAddPlant = (plant) => {
    if (myPlants.find((p) => p.id === plant.id)) {
      Alert.alert('Already added', `${plant.name} is already in your collection!`);
      return;
    }
    setMyPlants([...myPlants, plant]);
    Alert.alert('Added!', `${plant.name} added to your collection!`);
  };

  const renderPlant = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.photo} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>Type: {item.sort}</Text>
      <Text style={styles.info}>Water: every {item.waterInterval} days</Text>
      <Button title="Add to My Collection" onPress={() => handleAddPlant(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 All Plants</Text>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={renderPlant}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A3F35',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A3F35',
  },
  info: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
}); 