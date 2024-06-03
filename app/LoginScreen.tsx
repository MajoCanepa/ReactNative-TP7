import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {  useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation();

const handleLogin = () => {
  const userIsEmail = user.includes('@')
  const userIsValid = userIsEmail ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user) : user.length >= 5 && user.length <= 10
  const passwordIsValid = password.length >= 5 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\W/.test(password);
  if (!userIsValid) {
    console.error('El nombre de usuario o email no es válido');
  } else if (!passwordIsValid) {
    console.error('La contraseña no es válida');
  } else {
    console.log(`Usuario: ${user}, Contraseña: ${password}`);
  }
    
};

  return (
    <View style={styles.container}>
      <TextInput
        label="Usuario"
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin}>
        Iniciar sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});