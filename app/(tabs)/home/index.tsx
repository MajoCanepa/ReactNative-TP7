
import { View, StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './welcome/WelcomeScreen'

export default function index() {
  return (
    <View style={styles.container}>
      <WelcomeScreen /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})