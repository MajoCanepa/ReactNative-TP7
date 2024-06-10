import { View, StyleSheet } from 'react-native'
import React from 'react'
import ListTask from './components/ListTask'


export default function index() {
  return (
    <View style={styles.container}>
      <ListTask />
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