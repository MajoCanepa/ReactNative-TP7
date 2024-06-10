import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import tasks from '../tasks/tasks.json';
import EditTask from './components/EditTask';
import { Button } from 'react-native-paper';

type Task = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
};

export default function TaskDetails() {

  const [isEditing, setIsEditing] = useState(false);
  const { taskId } = useLocalSearchParams();
  const selectedTaskId = parseInt(taskId as string, 10);
  const selectedTask = tasks.find((task: Task) => task.id === selectedTaskId);

  if (!selectedTask) {
    return (
      <View style={styles.container}>
        <Text>No se encontró la tarea</Text>
      </View>
    );
  }

  if (isEditing) {
    return <EditTask taskId={selectedTask.id} />;
  }

  return (
    <View style={styles.container}>
      <Text>Título: {selectedTask.title}</Text>
      <Text>Descripción: {selectedTask.description}</Text>
      <Text>Autor: {selectedTask.author}</Text>
      <Text>Fecha de creación: {selectedTask.date}</Text>
      <Button 
        children='Editar' 
        onPress={() => setIsEditing(true)} />
      <Button
        children='Eliminar'
        onPress={() => alert('Tarea eliminada')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
