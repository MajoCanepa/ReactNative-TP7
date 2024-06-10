import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'

export default function WelcomeScreen() {
  const handlePress = () => {
    router.replace('tasks')
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la app de Tareas</Text>
      <Button mode='contained' onPress={handlePress}>Ver listas de tareas</Button>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 16
  },
})