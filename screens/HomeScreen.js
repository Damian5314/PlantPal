import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { formatDistanceToNow, parseISO } from 'date-fns';

const plants = [
    {
      id: '1',
      name: 'Succulent',
      sort: 'succulent',
      waterInterval: 5,
      laatsteWaterbeurt: '2025-04-12',
      photo: require('../assets/plants/Succulent.png'),
    },
    {
      id: '2',
      name: 'Crested Opuntia',
      sort: 'cactus',
      waterInterval: 7,
      laatsteWaterbeurt: '2025-04-10',
      photo: require('../assets/plants/Crested Opuntia.png'),
    },
    {
      id: '3',
      name: 'echinocactus grusonii',
      sort: 'cactus',
      waterInterval: 10,
      laatsteWaterbeurt: '2025-04-09',
      photo: require('../assets/plants/echinocactus grusonii.png'),
    },
    {
      id: '4',
      name: 'Trichocereus spachianus',
      sort: 'cactus',
      waterInterval: 7,
      laatsteWaterbeurt: '2025-04-11',
      photo: require('../assets/plants/Trichocereus spachianus.png'),
    }
  ];

  const HomeScreen = () => {
    const renderPlant = ({ item }) => {
      const dagenGeleden = formatDistanceToNow(new Date(item.laatsteWaterbeurt), {
        addSuffix: true,
      });
  
      return (
        <View style={styles.card}>
          <Image source={item.photo} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.info}>{item.sort}</Text>
          <Text style={styles.status}>Laatst water gegeven: {dagenGeleden}</Text>
          <Button title="Geef water" onPress={() => console.log('Water geven!')} />
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🌿 PlantPal</Text>
        <FlatList
          data={plants}
          keyExtractor={(item) => item.id}
          renderItem={renderPlant}
        />
      </View>
    );
  };
  
  export default HomeScreen;
  
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
    },
    status: {
      fontSize: 14,
      marginVertical: 8,
      color: '#6CBA7C',
    },
  });