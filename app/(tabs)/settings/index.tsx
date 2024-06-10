import { View,  StyleSheet } from 'react-native'
import React from 'react'
import { Text, Button } from 'react-native-paper'

export default function index() {
  return (
    <View style={styles.container}> 
      <Text variant='headlineLarge'>Configuración</Text>

      <Button style={styles.button} mode='contained' onPress={() => alert('Se presionó el botón')}>Cambiar modo de color</Button>

      <Button style={styles.button} mode='contained' onPress={() => alert('Se presionó el botón')}>Cambiar idioma</Button>
      
      <Button style={styles.button} mode='contained' onPress={() => alert('Se presionó el botón')}>Cerrar sesion</Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: 200,

  }
})