import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@email.com');
  const [editing, setEditing] = useState(false);
  const [plantCount, setPlantCount] = useState(4); // Placeholder, can be dynamic

  const handleSave = () => {
    setEditing(false);
    Alert.alert('Profile updated!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
        style={styles.avatar}
      />
      {editing ? (
        <>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Button title="Save" onPress={handleSave} />
        </>
      ) : (
        <>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.info}>Plants in collection: {plantCount}</Text>
          <Button title="Edit Profile" onPress={() => setEditing(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF3E0',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A3F35',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#6CBA7C',
    marginBottom: 20,
  },
  input: {
    width: 220,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
}); 