import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface AddTaskProps {
  onCancel: () => void;
}

export default function AddTask({ onCancel }: AddTaskProps) {
  return (
    <View style={styles.container}>
      <TextInput
        label="Título"
        placeholder="Título"
        style={styles.input}
      />
      <TextInput
        label="Descripción"
        placeholder="Descripción"
        style={styles.input}
      />
      <TextInput
        label="Autor"
        placeholder="Autor"
        style={styles.input}
      />
      <TextInput
        label="Fecha de creación"
        placeholder="YYYY-MM-DD"
        style={styles.input}
      />
      <Button mode="contained" style={styles.button}>
        Guardar
      </Button>
      <Button mode="outlined" style={styles.button} onPress={onCancel}>
        Cancelar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});
